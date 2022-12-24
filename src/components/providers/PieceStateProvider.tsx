import { FC, Dispatch, Reducer, useEffect } from 'react';
import type { ChildrenProps } from 'types/children';
import type { PieceState } from 'utils/piece';
import type { Row, Col } from 'utils/position';

import _ from 'lodash';
import { createContext, useContext, useMemo, useReducer } from 'react';
import { useGameState } from './GameStateProvider';
import { match } from 'ts-pattern';

export type PieceAction =
  | {
      message: 'drag';
    }
  | {
      message: 'update';
      payload?: PieceState;
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

const PieceStateProvider: FC<PieceStateProviderProps> = ({
  children,
  row,
  col,
}) => {
  const { pieces, dispatch: gameStateDispatch } = useGameState();

  const reducer: Reducer<PieceState | undefined, PieceAction> = (
    state,
    action,
  ) =>
    state
      ? match(action)
          .with({ message: 'drag' }, () => ({ ...state, isDragging: true }))
          .with({ message: 'update' }, ({ payload }) => payload)
          .exhaustive()
      : undefined;

  const piece = pieces[col][row];
  const [state, dispatch] = useReducer(reducer, piece);

  useEffect(() => {
    console.debug('dispatching update from effect');
    dispatch({ message: 'update', payload: piece });
  }, [piece]);

  return (
    <context.Provider value={{ ...state, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default PieceStateProvider;
