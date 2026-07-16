import { cn } from "@/lib/utils";
import type { TarotCardData } from "@/lib/tarot/cards";

interface TarotCardProps {
  card: TarotCardData;
  reversed: boolean;
  revealed: boolean;
  onReveal?: () => void;
  size?: "sm" | "md" | "lg";
}

const SIZE_CLASSES: Record<NonNullable<TarotCardProps["size"]>, string> = {
  sm: "h-36 w-24 text-2xl",
  md: "h-48 w-32 text-3xl",
  lg: "h-64 w-40 text-4xl",
};

export function TarotCard({
  card,
  reversed,
  revealed,
  onReveal,
  size = "md",
}: TarotCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={onReveal}
        disabled={!onReveal}
        aria-label={revealed ? card.name : "Reveal card"}
        className={cn(
          "group perspective-[1000px]",
          SIZE_CLASSES[size],
          onReveal && "cursor-pointer",
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
          style={{ transform: revealed ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          {/* Card back */}
          <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-amber-300/30 bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-900 shadow-lg [backface-visibility:hidden]">
            <div className="flex h-[85%] w-[85%] items-center justify-center rounded-lg border border-amber-300/20">
              <span className="text-3xl opacity-70">✨</span>
            </div>
          </div>

          {/* Card front */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border p-2 text-center shadow-lg [backface-visibility:hidden]",
              card.arcana === "major"
                ? "border-amber-300/50 bg-gradient-to-br from-violet-100 to-amber-50"
                : "border-violet-300/50 bg-gradient-to-br from-slate-50 to-violet-50",
            )}
            style={{ transform: "rotateY(180deg)" }}
          >
            <span
              className={cn(
                "leading-none transition-transform",
                reversed && "rotate-180",
              )}
            >
              {card.symbol}
            </span>
            <span className="text-[0.65rem] font-semibold leading-tight text-indigo-950">
              {card.name}
            </span>
          </div>
        </div>
      </button>
      {revealed && (
        <span className="text-xs font-medium uppercase tracking-wide text-amber-200/80">
          {card.name}
          {reversed ? " (Reversed)" : ""}
        </span>
      )}
    </div>
  );
}
