import { TAROT_DECK, type TarotCardData } from "./cards";

export interface DrawnCard {
  card: TarotCardData;
  reversed: boolean;
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function drawCards(count: number): DrawnCard[] {
  const shuffled = shuffle(TAROT_DECK);
  return shuffled.slice(0, count).map((card) => ({
    card,
    reversed: Math.random() < 0.35,
  }));
}
