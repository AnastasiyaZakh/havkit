export type Arcana = "major" | "minor";
export type Suit = "wands" | "cups" | "swords" | "pentacles";

export interface TarotCardData {
  id: string;
  name: string;
  arcana: Arcana;
  suit?: Suit;
  number: number;
  symbol: string;
  keywords: string[];
  upright: string;
  reversed: string;
}

export const SUIT_META: Record<
  Suit,
  { label: string; element: string; symbol: string; theme: string }
> = {
  wands: {
    label: "Wands",
    element: "Fire",
    symbol: "🔥",
    theme: "passion, action, creativity",
  },
  cups: {
    label: "Cups",
    element: "Water",
    symbol: "💧",
    theme: "emotion, love, intuition",
  },
  swords: {
    label: "Swords",
    element: "Air",
    symbol: "⚔️",
    theme: "intellect, conflict, truth",
  },
  pentacles: {
    label: "Pentacles",
    element: "Earth",
    symbol: "🪙",
    theme: "material, work, body",
  },
};

const MAJOR_ARCANA: TarotCardData[] = [
  {
    id: "major-0",
    name: "The Fool",
    arcana: "major",
    number: 0,
    symbol: "🃏",
    keywords: ["beginnings", "innocence", "leap of faith"],
    upright:
      "A fresh start beckons — step forward with an open heart and trust the unknown.",
    reversed:
      "Recklessness or hesitation; a leap taken without looking, or fear that keeps you stuck.",
  },
  {
    id: "major-1",
    name: "The Magician",
    arcana: "major",
    number: 1,
    symbol: "🎩",
    keywords: ["manifestation", "willpower", "resourcefulness"],
    upright:
      "You have every tool you need — focus your will and turn intention into action.",
    reversed:
      "Untapped potential, manipulation, or scattered energy blocking real progress.",
  },
  {
    id: "major-2",
    name: "The High Priestess",
    arcana: "major",
    number: 2,
    symbol: "🌙",
    keywords: ["intuition", "mystery", "the subconscious"],
    upright:
      "Quiet your mind and listen inward — the answer is already known to you.",
    reversed:
      "Disconnection from intuition, secrets surfacing, or ignoring an inner truth.",
  },
  {
    id: "major-3",
    name: "The Empress",
    arcana: "major",
    number: 3,
    symbol: "👑",
    keywords: ["abundance", "nurturing", "creativity"],
    upright:
      "Growth, fertility, and creative flow — nurture what you're building.",
    reversed:
      "Creative block, neglect, or smothering care that needs more balance.",
  },
  {
    id: "major-4",
    name: "The Emperor",
    arcana: "major",
    number: 4,
    symbol: "🏛️",
    keywords: ["structure", "authority", "stability"],
    upright:
      "Discipline and clear structure bring lasting stability — lead with steady authority.",
    reversed:
      "Rigidity, domination, or a loss of control that needs a softer hand.",
  },
  {
    id: "major-5",
    name: "The Hierophant",
    arcana: "major",
    number: 5,
    symbol: "📜",
    keywords: ["tradition", "belief systems", "guidance"],
    upright:
      "Wisdom found in tradition, mentorship, or shared belief — seek trusted guidance.",
    reversed:
      "Breaking with convention, questioning dogma, or feeling boxed in by rules.",
  },
  {
    id: "major-6",
    name: "The Lovers",
    arcana: "major",
    number: 6,
    symbol: "💞",
    keywords: ["union", "choice", "alignment"],
    upright:
      "A meaningful connection or a values-driven choice stands before you.",
    reversed: "Disharmony, misalignment, or a difficult choice avoided.",
  },
  {
    id: "major-7",
    name: "The Chariot",
    arcana: "major",
    number: 7,
    symbol: "🏇",
    keywords: ["willpower", "determination", "victory"],
    upright:
      "Sheer determination and focus carry you to victory — take the reins.",
    reversed:
      "Loss of direction, opposing forces, or willpower running out of control.",
  },
  {
    id: "major-8",
    name: "Strength",
    arcana: "major",
    number: 8,
    symbol: "🦁",
    keywords: ["courage", "compassion", "inner power"],
    upright: "Gentle courage and compassion tame even the wildest challenge.",
    reversed:
      "Self-doubt, low confidence, or strength used as force instead of grace.",
  },
  {
    id: "major-9",
    name: "The Hermit",
    arcana: "major",
    number: 9,
    symbol: "🏮",
    keywords: ["introspection", "solitude", "inner guidance"],
    upright:
      "Step back from the noise — solitude reveals the wisdom you're seeking.",
    reversed:
      "Isolation, withdrawal, or refusing guidance when it's needed most.",
  },
  {
    id: "major-10",
    name: "Wheel of Fortune",
    arcana: "major",
    number: 10,
    symbol: "🎡",
    keywords: ["cycles", "fate", "turning points"],
    upright:
      "A turning point arrives — change is in motion and fortune shifts in your favor.",
    reversed:
      "A setback or resistance to a cycle that's ready to turn regardless.",
  },
  {
    id: "major-11",
    name: "Justice",
    arcana: "major",
    number: 11,
    symbol: "⚖️",
    keywords: ["truth", "fairness", "cause and effect"],
    upright:
      "Clear-eyed truth and fairness prevail — a decision meets its honest consequence.",
    reversed:
      "Imbalance, unfairness, or avoiding accountability for a choice made.",
  },
  {
    id: "major-12",
    name: "The Hanged Man",
    arcana: "major",
    number: 12,
    symbol: "🙃",
    keywords: ["surrender", "new perspective", "pause"],
    upright:
      "Pause and see from another angle — surrender leads to unexpected clarity.",
    reversed:
      "Stalling, resistance to letting go, or a perspective stuck in place.",
  },
  {
    id: "major-13",
    name: "Death",
    arcana: "major",
    number: 13,
    symbol: "🦋",
    keywords: ["transformation", "endings", "letting go"],
    upright:
      "An ending clears space for transformation — release what no longer serves you.",
    reversed:
      "Resisting necessary change, or a transition dragged out longer than it should be.",
  },
  {
    id: "major-14",
    name: "Temperance",
    arcana: "major",
    number: 14,
    symbol: "🧪",
    keywords: ["balance", "moderation", "patience"],
    upright:
      "Patient blending of opposites brings harmony — take the middle path.",
    reversed:
      "Imbalance, excess, or impatience pulling things out of alignment.",
  },
  {
    id: "major-15",
    name: "The Devil",
    arcana: "major",
    number: 15,
    symbol: "⛓️",
    keywords: ["attachment", "temptation", "shadow"],
    upright:
      "Examine what binds you — attachment, habit, or fear may be self-imposed.",
    reversed:
      "Breaking free from a limiting pattern, addiction, or unhealthy attachment.",
  },
  {
    id: "major-16",
    name: "The Tower",
    arcana: "major",
    number: 16,
    symbol: "🌩️",
    keywords: ["upheaval", "revelation", "sudden change"],
    upright:
      "A sudden shake-up dismantles a false structure — chaos clears the way for truth.",
    reversed:
      "Averting disaster narrowly, or delaying a collapse that's ultimately inevitable.",
  },
  {
    id: "major-17",
    name: "The Star",
    arcana: "major",
    number: 17,
    symbol: "⭐",
    keywords: ["hope", "healing", "renewal"],
    upright:
      "Hope and quiet healing return after hardship — trust in the process.",
    reversed:
      "Despair, disconnection from hope, or faith that feels hard to hold onto.",
  },
  {
    id: "major-18",
    name: "The Moon",
    arcana: "major",
    number: 18,
    symbol: "🌕",
    keywords: ["illusion", "intuition", "the unknown"],
    upright:
      "Not everything is as it seems — trust intuition to navigate the uncertainty.",
    reversed:
      "Confusion lifting, or fear and illusion clouding a clear read on the truth.",
  },
  {
    id: "major-19",
    name: "The Sun",
    arcana: "major",
    number: 19,
    symbol: "☀️",
    keywords: ["joy", "vitality", "success"],
    upright:
      "Warmth, clarity, and success shine through — enjoy this bright, open moment.",
    reversed:
      "Temporary clouds over joy, or success that hasn't quite been claimed yet.",
  },
  {
    id: "major-20",
    name: "Judgement",
    arcana: "major",
    number: 20,
    symbol: "📯",
    keywords: ["reckoning", "awakening", "renewal"],
    upright:
      "A call to rise up and answer for who you've become — awakening and renewal follow.",
    reversed:
      "Self-doubt, avoiding a reckoning, or being overly harsh in self-judgment.",
  },
  {
    id: "major-21",
    name: "The World",
    arcana: "major",
    number: 21,
    symbol: "🌍",
    keywords: ["completion", "wholeness", "fulfillment"],
    upright:
      "A cycle completes in full — celebrate the wholeness of what you've achieved.",
    reversed:
      "Unfinished business, or a completion that feels just out of reach.",
  },
];

const RANK_META: Record<number, { name: string; short: string }> = {
  1: { name: "Ace", short: "A" },
  2: { name: "Two", short: "2" },
  3: { name: "Three", short: "3" },
  4: { name: "Four", short: "4" },
  5: { name: "Five", short: "5" },
  6: { name: "Six", short: "6" },
  7: { name: "Seven", short: "7" },
  8: { name: "Eight", short: "8" },
  9: { name: "Nine", short: "9" },
  10: { name: "Ten", short: "10" },
  11: { name: "Page", short: "P" },
  12: { name: "Knight", short: "Kn" },
  13: { name: "Queen", short: "Q" },
  14: { name: "King", short: "K" },
};

interface MinorMeaning {
  keywords: string[];
  upright: string;
  reversed: string;
}

const WANDS: Record<number, MinorMeaning> = {
  1: {
    keywords: ["inspiration", "new venture"],
    upright:
      "A spark of inspiration ignites — a new creative venture is ready to begin.",
    reversed:
      "Delays, a false start, or inspiration that hasn't found its direction yet.",
  },
  2: {
    keywords: ["planning", "vision"],
    upright:
      "You hold the world in your hands — plan boldly for what comes next.",
    reversed: "Indecision or fear of stepping outside a familiar comfort zone.",
  },
  3: {
    keywords: ["expansion", "foresight"],
    upright:
      "Early efforts begin to pay off — look outward toward growth and opportunity.",
    reversed:
      "Delays in progress, or plans that need to be reassessed before moving forward.",
  },
  4: {
    keywords: ["celebration", "homecoming"],
    upright:
      "A moment of celebration and stability — enjoy the harmony you've built.",
    reversed: "Instability at home, or a celebration postponed.",
  },
  5: {
    keywords: ["conflict", "competition"],
    upright:
      "Friction and competition test your resolve — the struggle sharpens you.",
    reversed: "Avoiding conflict, or tension finally easing into resolution.",
  },
  6: {
    keywords: ["victory", "recognition"],
    upright:
      "Public recognition and well-earned victory arrive — take the win.",
    reversed:
      "Delayed recognition, or a private doubt about a success others already see.",
  },
  7: {
    keywords: ["perseverance", "defense"],
    upright:
      "Hold your ground — perseverance protects what you've worked hard to build.",
    reversed:
      "Feeling overwhelmed or giving up ground you should be defending.",
  },
  8: {
    keywords: ["momentum", "swift action"],
    upright:
      "Events move quickly now — momentum carries plans rapidly forward.",
    reversed:
      "Frustrating delays, or things moving too fast to keep steady footing.",
  },
  9: {
    keywords: ["resilience", "persistence"],
    upright:
      "Battle-worn but still standing — one more push sees this through.",
    reversed:
      "Exhaustion, defensiveness, or burnout from carrying on too long alone.",
  },
  10: {
    keywords: ["burden", "responsibility"],
    upright:
      "The load feels heavy — you're carrying real responsibility toward a worthy goal.",
    reversed: "Overload, or the relief of finally setting a burden down.",
  },
  11: {
    keywords: ["enthusiasm", "exploration"],
    upright:
      "An eager, curious energy wants to explore and try something bold and new.",
    reversed:
      "Scattered enthusiasm, or hesitation before taking the first real step.",
  },
  12: {
    keywords: ["action", "adventure"],
    upright: "Bold, fast-moving energy pushes you toward action and adventure.",
    reversed: "Impulsiveness, or plans derailed by impatience and haste.",
  },
  13: {
    keywords: ["confidence", "warmth"],
    upright:
      "Confident, magnetic, and warm — you lead with courage and creative fire.",
    reversed:
      "Jealousy, insecurity, or confidence tipping into self-centeredness.",
  },
  14: {
    keywords: ["leadership", "vision"],
    upright:
      "A bold visionary leader — inspire others and act with confident authority.",
    reversed:
      "Impulsive leadership, or ambition that overreaches its foundation.",
  },
};

const CUPS: Record<number, MinorMeaning> = {
  1: {
    keywords: ["new love", "emotional beginning"],
    upright:
      "An overflowing cup — new love, compassion, or emotional renewal begins.",
    reversed:
      "Emotional emptiness, blocked feelings, or love that hasn't found its outlet.",
  },
  2: {
    keywords: ["partnership", "connection"],
    upright:
      "A heartfelt connection forms — mutual respect and genuine partnership.",
    reversed: "Disconnection, imbalance, or a bond under quiet strain.",
  },
  3: {
    keywords: ["friendship", "celebration"],
    upright:
      "Joyful celebration among friends — community and shared happiness.",
    reversed: "Overindulgence, gossip, or a friendship feeling out of balance.",
  },
  4: {
    keywords: ["apathy", "contemplation"],
    upright:
      "An offer sits unnoticed — take stock before boredom becomes missed opportunity.",
    reversed:
      "Renewed motivation, or awakening from apathy to see what's been offered.",
  },
  5: {
    keywords: ["loss", "grief"],
    upright:
      "Grief over what's spilled — but two cups still stand, waiting to be seen.",
    reversed: "Moving on from loss, or finally accepting what can't be undone.",
  },
  6: {
    keywords: ["nostalgia", "innocence"],
    upright: "Sweet nostalgia and memories of simpler times bring comfort.",
    reversed:
      "Living too much in the past, or a chance to finally move forward.",
  },
  7: {
    keywords: ["choices", "illusion"],
    upright:
      "Many tempting options appear — look past illusion to choose what's real.",
    reversed:
      "Clarity cutting through confusion, or overwhelm from too many choices.",
  },
  8: {
    keywords: ["walking away", "seeking more"],
    upright:
      "Walking away from what no longer fulfills, in search of deeper meaning.",
    reversed: "Fear of leaving, or returning to something already outgrown.",
  },
  9: {
    keywords: ["satisfaction", "wishes fulfilled"],
    upright:
      "Contentment and wishes fulfilled — savor this comfortable, satisfying moment.",
    reversed:
      "Overindulgence, or satisfaction that feels emptier than expected.",
  },
  10: {
    keywords: ["harmony", "fulfillment"],
    upright:
      "Lasting emotional harmony — a joyful, fulfilled home and relationships.",
    reversed:
      "Discord at home, or a happiness that looks better than it feels.",
  },
  11: {
    keywords: ["sensitivity", "creative offer"],
    upright:
      "A gentle, imaginative message or offer arrives — stay open to it.",
    reversed:
      "Emotional immaturity, or a creative idea that needs more grounding.",
  },
  12: {
    keywords: ["romance", "invitation"],
    upright:
      "A charming invitation or romantic gesture — follow your heart's pull.",
    reversed:
      "Moodiness, or an offer that turns out less sincere than it seemed.",
  },
  13: {
    keywords: ["compassion", "intuition"],
    upright:
      "Deep emotional intelligence — lead with compassion and trusted intuition.",
    reversed: "Emotional overwhelm, or compassion that tips into self-neglect.",
  },
  14: {
    keywords: ["emotional mastery", "wisdom"],
    upright:
      "Calm emotional mastery — wise, balanced, and generous with your heart.",
    reversed:
      "Moodiness beneath the surface, or emotional control turning to manipulation.",
  },
};

const SWORDS: Record<number, MinorMeaning> = {
  1: {
    keywords: ["clarity", "breakthrough"],
    upright:
      "A moment of sharp clarity cuts through confusion — truth breaks through.",
    reversed: "Confusion, a foggy mind, or clarity used carelessly.",
  },
  2: {
    keywords: ["stalemate", "difficult choice"],
    upright:
      "Balanced but blocked — a decision is being avoided behind closed eyes.",
    reversed: "A stalemate finally breaking, or indecision causing real harm.",
  },
  3: {
    keywords: ["heartbreak", "painful truth"],
    upright:
      "A painful truth or heartbreak pierces through — grief is honest here.",
    reversed: "Healing from heartbreak, or pain finally being released.",
  },
  4: {
    keywords: ["rest", "recovery"],
    upright:
      "Withdraw and rest — recovery requires real stillness before returning.",
    reversed:
      "Restlessness, or forced rest after pushing too hard for too long.",
  },
  5: {
    keywords: ["conflict", "hollow victory"],
    upright:
      "A win that costs more than it's worth — conflict leaves everyone diminished.",
    reversed: "Reconciliation, or the fallout still lingering after a fight.",
  },
  6: {
    keywords: ["transition", "moving on"],
    upright:
      "Leaving turbulence behind — a difficult passage toward calmer waters.",
    reversed: "Resistance to moving on, or a transition that's stalled midway.",
  },
  7: {
    keywords: ["strategy", "deception"],
    upright:
      "A quiet, strategic move — but check whether it's honest or evasive.",
    reversed:
      "Deception coming to light, or guilt catching up to a shortcut taken.",
  },
  8: {
    keywords: ["restriction", "self-imposed limits"],
    upright:
      "Feeling trapped — but the binds are looser than fear makes them seem.",
    reversed:
      "Freeing yourself from self-imposed limitation and old fearful stories.",
  },
  9: {
    keywords: ["anxiety", "worry"],
    upright:
      "Anxious thoughts loom large at night — the fear is often worse than reality.",
    reversed:
      "Relief after anxiety, or worry that's finally being faced honestly.",
  },
  10: {
    keywords: ["ending", "rock bottom"],
    upright:
      "A painful ending — but it's the definitive bottom before a new dawn.",
    reversed: "Recovery beginning, or an ending being resisted past its time.",
  },
  11: {
    keywords: ["curiosity", "vigilance"],
    upright:
      "A sharp, curious mind seeks truth — stay alert and ask more questions.",
    reversed: "Scattered thinking, gossip, or information used carelessly.",
  },
  12: {
    keywords: ["fast thinking", "direct action"],
    upright:
      "Quick, decisive thinking cuts straight to the point — act with clear intent.",
    reversed: "Impulsive words or hasty action taken without enough thought.",
  },
  13: {
    keywords: ["clarity", "independence"],
    upright:
      "Clear-eyed, independent, and honest — truth spoken without sentiment.",
    reversed: "Coldness, or honesty sharpened into unnecessary cruelty.",
  },
  14: {
    keywords: ["authority", "truth"],
    upright:
      "Sharp intellect and fair authority — lead with truth and clear logic.",
    reversed: "Manipulation, or authority wielded without enough compassion.",
  },
};

const PENTACLES: Record<number, MinorMeaning> = {
  1: {
    keywords: ["opportunity", "new resource"],
    upright:
      "A tangible new opportunity appears — plant the seed for real, lasting growth.",
    reversed: "A missed opportunity, or instability in finances or resources.",
  },
  2: {
    keywords: ["balance", "adaptability"],
    upright:
      "Juggling priorities with playful balance — stay adaptable as things shift.",
    reversed:
      "Overextension, or struggling to keep too many things in the air.",
  },
  3: {
    keywords: ["teamwork", "skill"],
    upright:
      "Collaborative skill-building — good work is recognized through teamwork.",
    reversed: "Disorganization, or talent going unrecognized without teamwork.",
  },
  4: {
    keywords: ["security", "control"],
    upright:
      "Holding tightly to security and resources — stability, but watch the grip.",
    reversed:
      "Loosening control, or fear of loss driving over-attachment to things.",
  },
  5: {
    keywords: ["hardship", "isolation"],
    upright:
      "A hard, isolating stretch — help may be closer than it feels right now.",
    reversed:
      "Recovery from hardship, or finally accepting the support that's offered.",
  },
  6: {
    keywords: ["generosity", "giving and receiving"],
    upright:
      "A fair, generous exchange of resources — giving and receiving in balance.",
    reversed:
      "An imbalance of power in giving, or strings attached to generosity.",
  },
  7: {
    keywords: ["patience", "long-term view"],
    upright:
      "Patient investment — assess progress and trust the long-term payoff.",
    reversed:
      "Impatience, or effort that isn't yielding the return you hoped for.",
  },
  8: {
    keywords: ["craftsmanship", "dedication"],
    upright:
      "Focused, diligent mastery — quality work built through steady dedication.",
    reversed:
      "Perfectionism, or diligence slipping into monotony without purpose.",
  },
  9: {
    keywords: ["independence", "abundance"],
    upright:
      "Self-sufficient abundance — enjoy the comfort earned through your own effort.",
    reversed:
      "Overwork, or dependence on others where independence would serve better.",
  },
  10: {
    keywords: ["legacy", "long-term security"],
    upright:
      "Lasting security and legacy — the fruits of long-term effort take root.",
    reversed: "Instability in family or finances, or a legacy at risk.",
  },
  11: {
    keywords: ["ambition", "study"],
    upright:
      "Eager, grounded ambition — a student's hunger to learn and build something real.",
    reversed:
      "Procrastination, or unrealistic plans that lack solid follow-through.",
  },
  12: {
    keywords: ["diligence", "routine"],
    upright:
      "Steady, methodical progress — reliability and routine move things forward.",
    reversed: "Boredom, or a routine that's become rigid and stagnant.",
  },
  13: {
    keywords: ["nurturing", "practical care"],
    upright:
      "Warm, practical nurturing — grounded care for both self and others.",
    reversed: "Self-neglect, or care that overextends past what's sustainable.",
  },
  14: {
    keywords: ["abundance", "steady leadership"],
    upright:
      "Steady, generous mastery — reliable leadership built on real-world success.",
    reversed:
      "Stubbornness, or material success prioritized over everything else.",
  },
};

const SUIT_TABLES: Record<Suit, Record<number, MinorMeaning>> = {
  wands: WANDS,
  cups: CUPS,
  swords: SWORDS,
  pentacles: PENTACLES,
};

const SUIT_SYMBOLS: Record<Suit, string> = {
  wands: "🔥",
  cups: "💧",
  swords: "⚔️",
  pentacles: "🪙",
};

function buildMinorArcana(): TarotCardData[] {
  const cards: TarotCardData[] = [];
  (Object.keys(SUIT_TABLES) as Suit[]).forEach((suit) => {
    const table = SUIT_TABLES[suit];
    for (let rank = 1; rank <= 14; rank++) {
      const meaning = table[rank];
      const rankMeta = RANK_META[rank];
      cards.push({
        id: `${suit}-${rank}`,
        name: `${rankMeta.name} of ${SUIT_META[suit].label}`,
        arcana: "minor",
        suit,
        number: rank,
        symbol: SUIT_SYMBOLS[suit],
        keywords: meaning.keywords,
        upright: meaning.upright,
        reversed: meaning.reversed,
      });
    }
  });
  return cards;
}

export const TAROT_DECK: TarotCardData[] = [
  ...MAJOR_ARCANA,
  ...buildMinorArcana(),
];

export function getCardById(id: string): TarotCardData | undefined {
  return TAROT_DECK.find((card) => card.id === id);
}
