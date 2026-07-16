export interface SpreadPosition {
  id: string;
  label: string;
  description: string;
}

export interface SpreadDefinition {
  id: string;
  name: string;
  tagline: string;
  positions: SpreadPosition[];
}

export const SPREADS: SpreadDefinition[] = [
  {
    id: "single",
    name: "Single Card",
    tagline: "A quick, focused answer or a card for the day.",
    positions: [
      {
        id: "single",
        label: "The Card",
        description: "What you need to know right now.",
      },
    ],
  },
  {
    id: "three-card",
    name: "Three Card",
    tagline: "Past, Present, Future — see how your situation is unfolding.",
    positions: [
      { id: "past", label: "Past", description: "What led you here." },
      {
        id: "present",
        label: "Present",
        description: "Where you stand right now.",
      },
      {
        id: "future",
        label: "Future",
        description: "Where things are heading.",
      },
    ],
  },
  {
    id: "celtic-cross",
    name: "Celtic Cross",
    tagline: "A deep, ten-card reading for a fuller picture of your situation.",
    positions: [
      {
        id: "present",
        label: "1. Present",
        description: "The heart of the matter right now.",
      },
      {
        id: "challenge",
        label: "2. Challenge",
        description: "What's crossing or complicating it.",
      },
      {
        id: "foundation",
        label: "3. Foundation",
        description: "The root cause, from the past.",
      },
      {
        id: "recent-past",
        label: "4. Recent Past",
        description: "An event now fading away.",
      },
      {
        id: "possible-outcome",
        label: "5. Best Outcome",
        description: "What's possible if things go well.",
      },
      {
        id: "near-future",
        label: "6. Near Future",
        description: "What's coming next.",
      },
      {
        id: "self",
        label: "7. You",
        description: "Your attitude or role in this.",
      },
      {
        id: "external",
        label: "8. External Influences",
        description: "People and forces around you.",
      },
      {
        id: "hopes-fears",
        label: "9. Hopes & Fears",
        description: "What you're hoping for — or dreading.",
      },
      {
        id: "outcome",
        label: "10. Outcome",
        description: "Where this is ultimately heading.",
      },
    ],
  },
];

export function getSpreadById(id: string): SpreadDefinition | undefined {
  return SPREADS.find((spread) => spread.id === id);
}
