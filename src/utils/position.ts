export const rows = ['1', '2', '3', '4', '5', '6', '7', '8'] as const;
export const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

export type Row = typeof rows[number];
export type Col = typeof cols[number];

export type Position = [Col, Row];

export type PositionStateMap<TState extends any> = {
  [TCol in Col]: {
    [TRow in Row]: TState;
  };
};

export type PartialPositionStateMap<TState extends any> = {
  [TCol in Col]: {
    [TRow in Row]?: TState;
  };
};
