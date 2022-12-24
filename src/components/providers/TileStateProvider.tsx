import { FC, Dispatch, Reducer, useEffect } from 'react';
import type { ChildrenProps } from 'types/children';
import type { Col, Position, Row } from 'utils/position';
import type { TileState } from 'utils/tile';

import { createContext, useReducer, useState, useContext } from 'react';
import { useGameState } from './GameStateProvider';
import { match } from 'ts-pattern';

export type TileStateAction = {
  message: 'drop';
  from: Position;
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

type TilePayload = {
  from?: Position;
  to: Position;
};

const context = createContext<TileContext>({
  color: 'dark',
  row: '1',
  col: 'A',
  dispatch: _ => {},
});

export const useTileState = () => useContext(context);

const TileStateProvider: FC<TileStateProviderProps> = ({
  children,
  row,
  col,
}) => {
  const { tiles, dispatch: gameStateDispatch } = useGameState();
  const [payload, setPayload] = useState<TilePayload>({ to: [col, row] });
  const tile = tiles[col][row];

  const reducer: Reducer<TileState, TileStateAction> = (state, action) =>
    match(action)
      .with({ message: 'drop' }, ({ message, from }) => {
        console.debug({ message, from });
        // gameStateDispatch({ message: 'move', from, to: [col, row] });
        setPayload(({ to }) => ({ from, to }));
        return state;
      })
      .exhaustive();

  const [state, dispatch] = useReducer(reducer, tile);

  useEffect(() => {
    if (payload.from) {
      console.debug('dispatching move to game state from effect');
      gameStateDispatch({
        message: 'move',
        from: payload.from,
        to: payload.to,
      });
      setPayload(({ to }) => ({ to }));
    }
  }, [payload]);

  return (
    <context.Provider value={{ ...state, row, col, dispatch }}>
      {children}
    </context.Provider>
  );
};

export default TileStateProvider;
