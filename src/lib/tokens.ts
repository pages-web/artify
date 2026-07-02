import designTokens from "@/../design-tokens.json";

export const tokens = designTokens as typeof designTokens;
export const { colors, typography, spacing, radius, shadows } = tokens;
export const motionTokens = tokens.motion;
