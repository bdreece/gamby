import type { Team } from './team';
import type { PartialPositionStateMap } from './position';

import pieceState from '../assets/pieces.json';

export const pieces = [
  'king',
  'queen',
  'rook',
  'bishop',
  'knight',
  'pawn',
] as const;

export type PieceType = typeof pieces[number];

export type PieceState = {
  team: Team;
  type: PieceType;
  alive: boolean;
  isDragging: boolean;
};

export type PieceStateMap = PartialPositionStateMap<PieceState>;

export const initialState = pieceState as PieceStateMap;
