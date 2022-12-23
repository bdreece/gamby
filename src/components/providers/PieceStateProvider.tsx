import type { FC, Dispatch, Reducer } from 'react';
import type { ChildrenProps } from 'types/children';
import type { PieceState } from 'utils/piece';
import type { Row, Col } from 'utils/position';

import { createContext, useContext, useReducer } from 'react';
import { useGameState } from './GameStateProvider';

export type PieceAction = {
  message: 'noop';
};

export type PieceContext = Partial<PieceState> & {
  dispatch: Dispatch<PieceAction>;
};

export type PieceStateProviderProps = ChildrenProps & {
  row: Row;
  col: Col;
};

const context = createContext<PieceContext>({
  dispatch: _ => {},
});

export const usePieceState = () => useContext(context);

const reducer: Reducer<PieceState | undefined, PieceAction> = (state, action) =>
  state;

const PieceStateProvider: FC<PieceStateProviderProps> = ({
  children,
  row,
  col,
}) => {
  const { pieces } = useGameState();
  const piece = pieces[col][row];

  const [state, dispatch] = useReducer(reducer, piece);

  return (
    <context.Provider value={{ ...state, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default PieceStateProvider;
