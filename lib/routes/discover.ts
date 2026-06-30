export const DISCOVER_SOURCE = {
  ASSISTANT: "assistant",
  RECOMMENDED: "recommended",
  TRENDING: "trending",
  ONBOARDING: "onboarding",
} as const;

export type DiscoverSource = typeof DISCOVER_SOURCE[keyof typeof DISCOVER_SOURCE];

type DiscoverParams = {
  source?: DiscoverSource;
  mood?: string;
  category?: string;
  filters?: string[]; 
};

export function discoverUrl(params: DiscoverParams = {}): string {
  const sp = new URLSearchParams();
  if (params.source) sp.set("source", params.source);
  if (params.mood) sp.set("mood", params.mood);
  if (params.category) sp.set("category", params.category);
  if (params.filters?.length) sp.set("filters", params.filters.join(","));
  const qs = sp.toString();
  return qs ? `/discover?${qs}` : "/discover";
}

export function parseDiscoverParams(sp: URLSearchParams): DiscoverParams {
  const source = sp.get("source");
  return {
    source: source && Object.values(DISCOVER_SOURCE).includes(source as DiscoverSource)
      ? (source as DiscoverSource)
      : undefined,
    mood: sp.get("mood") ?? undefined,
    category: sp.get("category") ?? undefined,
    filters: sp.get("filters")?.split(",").filter(Boolean) ?? undefined,
  };
}