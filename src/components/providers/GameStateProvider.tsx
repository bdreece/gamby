import type { FC, Dispatch, Reducer } from 'react';
import type { ChildrenProps } from 'types/children';
import type { PieceStateMap } from 'utils/piece';
import type { TileStateMap } from 'utils/tile';
import type { Team } from 'utils/team';

import { createContext, useContext, useReducer } from 'react';
import { initialState as pieceState } from '../../utils/piece';
import { initialState as tileState } from '../../utils/tile';

export type GameStateAction =
  | {
      message: 'start';
    }
  | {
      message: 'stop';
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
  dispatch: Dispatch<GameStateAction>;
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

const reducer: Reducer<GameState, GameStateAction> = (state, { message }) => {
  return { ...state, isRunning: message === 'start' };
};

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
