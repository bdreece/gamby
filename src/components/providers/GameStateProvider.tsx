import type { FC, Dispatch, Reducer } from 'react';
import type { ChildrenProps } from 'types/children';
import type { PieceStateMap } from 'utils/piece';
import type { TileStateMap } from 'utils/tile';
import type { Team } from 'utils/team';

import { createContext, useContext, useReducer } from 'react';
import { initialState as pieceState } from '../../utils/piece';
import { initialState as tileState } from '../../utils/tile';
import { Position } from 'utils/position';
import { match } from 'ts-pattern';

export type GameAction =
  | {
      message: 'start';
    }
  | {
      message: 'stop';
    }
  | {
      message: 'move';
      from: Position;
      to: Position;
    };

export type GameState = {
  isRunning: boolean;
  currentTurn: Team;
  userTeam: Team;
  startTime?: Date;
  endTime?: Date;
  pieces: PieceStateMap;
  tiles: TileStateMap;
};

export type GameContext = GameState & {
  dispatch: Dispatch<GameAction>;
};

export type GameStateProviderProps = ChildrenProps & {
  userTeam: Team;
};

const context = createContext<GameContext>({
  isRunning: false,
  currentTurn: 'white',
  userTeam: 'white',
  pieces: pieceState,
  tiles: tileState,
  dispatch: _ => {},
});

export const useGameState = () => useContext(context);

const reducer: Reducer<GameState, GameAction> = (state, action) =>
  match(action)
    .with({ message: 'start' }, () => ({
      ...state,
      isRunning: true,
      startTime: new Date(),
    }))
    .with({ message: 'stop' }, () => ({
      ...state,
      isRunning: false,
      endTime: new Date(),
    }))
    .with({ message: 'move' }, ({ message, from, to }) => {
      let { pieces, currentTurn } = state;
      console.debug({ message, from, to, currentTurn });
      const [colFrom, rowFrom] = from;
      const [colTo, rowTo] = to;
      const piece = pieces[colFrom][rowFrom];
      if (piece) {
        pieces[colTo][rowTo] = piece;
        pieces[colFrom][rowFrom] = undefined;
      }
      currentTurn = currentTurn === 'black' ? 'white' : 'black';
      return { ...state, currentTurn, pieces };
    })
    .exhaustive();

const GameStateProvider: FC<GameStateProviderProps> = ({
  children,
  userTeam,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    isRunning: false,
    currentTurn: 'white',
    pieces: pieceState,
    tiles: tileState,
    userTeam,
  });

  return (
    <context.Provider value={{ dispatch, ...state }}>
      {children}
    </context.Provider>
  );
};

export default GameStateProvider;
