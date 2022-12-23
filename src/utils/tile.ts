import type { Color } from './color';
import type { PositionStateMap } from './position';

import tileState from '../assets/tiles.json';

export type TileState = {
  color: Color;
};

export type TileStateMap = PositionStateMap<TileState>;

export const initialState = tileState as TileStateMap;
