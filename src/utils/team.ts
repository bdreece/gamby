export const teams = ['black', 'white'] as const;

export type Team = typeof teams[number];
