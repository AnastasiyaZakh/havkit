import { useState } from "react";
import { cn } from "@/lib/utils";
import { SPREADS, getSpreadById } from "@/lib/tarot/spreads";
import { drawCards, type DrawnCard } from "@/lib/tarot/draw";
import { TarotCard } from "./TarotCard";

type Stage = "select" | "drawing" | "reading";

export function TarotApp() {
  const [spreadId, setSpreadId] = useState(SPREADS[0].id);
  const [stage, setStage] = useState<Stage>("select");
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const spread = getSpreadById(spreadId) ?? SPREADS[0];

  function startReading() {
    const cards = drawCards(spread.positions.length);
    setDrawnCards(cards);
    setRevealedIds(new Set());
    setStage("drawing");
  }

  function revealCard(id: string) {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  function revealAll() {
    setRevealedIds(new Set(drawnCards.map((d) => d.card.id)));
    setStage("reading");
  }

  function newReading() {
    setStage("select");
    setDrawnCards([]);
    setRevealedIds(new Set());
  }

  const allRevealed =
    drawnCards.length > 0 && revealedIds.size === drawnCards.length;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-16 text-center">
      <header className="flex flex-col items-center gap-3">
        <span className="text-4xl">🔮</span>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-amber-100 sm:text-4xl">
          Tarot
        </h1>
        <p className="max-w-md text-sm text-violet-200/80">
          Choose a spread, draw your cards, and reveal what they hold.
        </p>
      </header>

      {stage === "select" && (
        <div className="flex w-full flex-col items-center gap-8">
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {SPREADS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSpreadId(s.id)}
                className={cn(
                  "flex flex-col gap-2 rounded-xl border p-5 text-left transition-colors",
                  spreadId === s.id
                    ? "border-amber-300 bg-amber-300/10"
                    : "border-violet-400/20 bg-violet-950/40 hover:border-violet-300/40",
                )}
              >
                <span className="font-display text-lg font-semibold text-amber-100">
                  {s.name}
                </span>
                <span className="text-xs text-violet-200/70">{s.tagline}</span>
                <span className="text-xs font-medium text-violet-300/60">
                  {s.positions.length} card{s.positions.length > 1 ? "s" : ""}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={startReading}
            className="rounded-full bg-amber-300 px-8 py-3 text-sm font-semibold text-indigo-950 shadow-lg transition-transform hover:scale-105"
          >
            Shuffle &amp; Draw
          </button>
        </div>
      )}

      {stage !== "select" && (
        <div className="flex w-full flex-col items-center gap-10">
          <div
            className={cn(
              "grid w-full gap-x-4 gap-y-8 place-items-center",
              spread.id === "celtic-cross" && "grid-cols-2 sm:grid-cols-5",
            )}
            style={
              spread.id !== "celtic-cross"
                ? {
                    gridTemplateColumns: `repeat(${spread.positions.length}, minmax(0, 1fr))`,
                  }
                : undefined
            }
          >
            {drawnCards.map((drawn, index) => {
              const position = spread.positions[index];
              const revealed = revealedIds.has(drawn.card.id);
              return (
                <div
                  key={drawn.card.id}
                  className="flex flex-col items-center gap-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-violet-300/70">
                    {position.label}
                  </span>
                  <TarotCard
                    card={drawn.card}
                    reversed={drawn.reversed}
                    revealed={revealed}
                    onReveal={() => revealCard(drawn.card.id)}
                    size="sm"
                  />
                </div>
              );
            })}
          </div>

          {!allRevealed && (
            <button
              type="button"
              onClick={revealAll}
              className="rounded-full border border-amber-300/50 px-6 py-2 text-sm font-medium text-amber-200 transition-colors hover:bg-amber-300/10"
            >
              Reveal all
            </button>
          )}

          {stage === "drawing" && allRevealed && (
            <button
              type="button"
              onClick={() => setStage("reading")}
              className="rounded-full bg-amber-300 px-8 py-3 text-sm font-semibold text-indigo-950 shadow-lg transition-transform hover:scale-105"
            >
              Read the cards
            </button>
          )}

          {stage === "reading" && (
            <div className="flex w-full flex-col gap-4 text-left">
              {drawnCards.map((drawn, index) => {
                const position = spread.positions[index];
                const meaning = drawn.reversed
                  ? drawn.card.reversed
                  : drawn.card.upright;
                return (
                  <div
                    key={drawn.card.id}
                    className="rounded-xl border border-violet-400/20 bg-violet-950/40 p-5"
                  >
                    <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-violet-300/70">
                        {position.label}
                      </span>
                      <span className="font-display text-base font-semibold text-amber-100">
                        {drawn.card.symbol} {drawn.card.name}
                        {drawn.reversed ? " (Reversed)" : ""}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-violet-100/90">
                      {meaning}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          <button
            type="button"
            onClick={newReading}
            className="text-sm font-medium text-violet-300/70 underline-offset-4 hover:text-amber-200 hover:underline"
          >
            Start a new reading
          </button>
        </div>
      )}
    </div>
  );
}
