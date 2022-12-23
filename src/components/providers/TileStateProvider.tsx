import type { FC, Dispatch, Reducer } from 'react';
import type { ChildrenProps } from 'types/children';
import type { Col, Row } from 'utils/position';
import type { TileState } from 'utils/tile';

import { createContext, useReducer, useContext } from 'react';
import { useGameState } from './GameStateProvider';

export type TileStateAction = {
  message: 'noop';
};

export type TileContext = TileState & {
  row: Row;
  col: Col;
  dispatch: Dispatch<TileStateAction>;
};

export type TileStateProviderProps = ChildrenProps & {
  row: Row;
  col: Col;
};

const context = createContext<TileContext>({
  color: 'dark',
  row: '1',
  col: 'A',
  dispatch: _ => {},
});

export const useTileState = () => useContext(context);

const reducer: Reducer<TileState, TileStateAction> = (state, action) => {
  return { ...state };
};

const TileStateProvider: FC<TileStateProviderProps> = ({
  children,
  row,
  col,
}) => {
  const { tiles } = useGameState();
  const tile = tiles[col][row];

  const [state, dispatch] = useReducer(reducer, tile);

  return (
    <context.Provider value={{ ...state, row, col, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default TileStateProvider;
