import type { FC, MouseEventHandler } from 'react';
import {
  TileStateProviderProps,
  PieceStateProviderProps,
  useGameState,
} from '../providers';

import { rows, cols } from '../../utils/position';
import { PieceStateProvider, TileStateProvider } from '../providers';
import { Tile as TileComponent, Piece as PieceComponent } from '.';

import classes from '../../styles/Board.module.scss';

type TileComponentProps = TileStateProviderProps;
type PieceComponentProps = Omit<PieceStateProviderProps, 'children'>;

const Tile: FC<TileComponentProps> = ({ row, col, children }) => (
  <TileStateProvider
    row={row}
    col={col}
  >
    <TileComponent>{children}</TileComponent>
  </TileStateProvider>
);

const Piece: FC<PieceComponentProps> = ({ row, col }) => (
  <PieceStateProvider
    row={row}
    col={col}
  >
    <PieceComponent />
  </PieceStateProvider>
);

const Board: FC = () => {
  const { isRunning, dispatch } = useGameState();

  const onClick: MouseEventHandler = e => {
    dispatch({ message: 'start' });
  };

  return !isRunning ? (
    <button onClick={onClick}>Start</button>
  ) : (
    <div className={classes.board}>
      {cols.flatMap(col =>
        rows.map(row => (
          <Tile
            key={col + row}
            row={row}
            col={col}
          >
            <Piece
              row={row}
              col={col}
            />
          </Tile>
        )),
      )}
    </div>
  );
};

export default Board;
