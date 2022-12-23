import type { FC } from 'react';

import { match } from 'ts-pattern';
import { usePieceState, useTileState } from '../../providers';

import King from './King';
import Queen from './Queen';
import Rook from './Rook';
import Bishop from './Bishop';
import Knight from './Knight';
import Pawn from './Pawn';

const Piece: FC = () => {
  const { type } = usePieceState();

  return type !== undefined
    ? match(type)
        .with('king', () => <King />)
        .with('queen', () => <Queen />)
        .with('rook', () => <Rook />)
        .with('bishop', () => <Bishop />)
        .with('knight', () => <Knight />)
        .with('pawn', () => <Pawn />)
        .exhaustive()
    : null;
};

export default Piece;
