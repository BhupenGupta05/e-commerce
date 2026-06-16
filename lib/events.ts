// as const makes the object read-only and infers the most specific types possible. Without it, TypeScript would see the values as string. With it, TypeScript sees them as literal types:

// VIEW: "view" (not just string)

// SAVE: "save"

// CART_ADD: "cart_add"

export const EVENT_TYPES = {
    VIEW: "view",
    SAVE: "save",
    CART_ADD: "cart_add",
    UNSAVE: "unsave"
} as const;

export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];

export const EVENT_WEIGHTS = {
    [EVENT_TYPES.VIEW]: 1,
    [EVENT_TYPES.SAVE]: 3,
} as const;