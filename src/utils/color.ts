export const colors = ['dark', 'light'] as const;

export type Color = typeof colors[number];
