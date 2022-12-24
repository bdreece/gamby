import type { FC, DragEventHandler } from 'react';

import { match } from 'ts-pattern';
import { useGameState, usePieceState, useTileState } from '../../providers';

import King from './King';
import Queen from './Queen';
import Rook from './Rook';
import Bishop from './Bishop';
import Knight from './Knight';
import Pawn from './Pawn';

import classes from '../../../styles/Piece.module.scss';
import { DragEventHandlers } from 'types/drag';

const Piece: FC = () => {
  const { currentTurn } = useGameState();
  const { row, col } = useTileState();
  const { team, type, dispatch } = usePieceState();

  const handlers = {
    onDragStart: e => {
      console.debug({ message: 'dragstart', from: [col, row] });
      const json = JSON.stringify([col, row]);
      e.dataTransfer.setData('application/json', json);
      dispatch({ message: 'drag' });
    },
  } satisfies DragEventHandlers;

  return type !== undefined ? (
    <div
      draggable={currentTurn === team}
      className={classes.piece}
      {...handlers}
    >
      {match(type)
        .with('king', () => <King />)
        .with('queen', () => <Queen />)
        .with('rook', () => <Rook />)
        .with('bishop', () => <Bishop />)
        .with('knight', () => <Knight />)
        .with('pawn', () => <Pawn />)
        .exhaustive()}
    </div>
  ) : null;
};

export default Piece;
