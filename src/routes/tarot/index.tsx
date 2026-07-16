import { createFileRoute } from "@tanstack/react-router";
import { TarotApp } from "@/components/tarot/TarotApp";

export const Route = createFileRoute("/tarot/")({
  head: () => ({
    meta: [
      { title: "Tarot · Draw your cards" },
      {
        name: "description",
        content:
          "Draw a single card or a full spread and explore what the tarot reveals.",
      },
      { name: "theme-color", content: "#1e1b4b" },
    ],
  }),
  component: TarotPage,
});

function TarotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-[#160f30] to-black">
      <TarotApp />
    </div>
  );
}
