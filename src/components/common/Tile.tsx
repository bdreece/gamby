import type { FC } from 'react';
import type { DragEventHandlers } from 'types/drag';
import type { ChildrenProps } from 'types/children';
import type { Styles } from 'types/styles';
import { TileStateAction, useTileState } from '../providers';

import cls from 'classnames';
import classes from '../../styles/Tile.module.scss';
import { Position } from 'utils/position';

export type TileProps = ChildrenProps;

const Tile: FC<TileProps> = ({ children }) => {
  const { color, row, col, dispatch } = useTileState();
  const styles: Styles = {
    div: {
      gridArea: `${col}${row}`,
    },
  };

  const handlers: DragEventHandlers = {
    onDrop: e => {
      const json = e.dataTransfer.getData('application/json');
      const position: Position = JSON.parse(json);
      const action: TileStateAction = { message: 'drop', from: position };
      console.debug({ ...action });
      dispatch(action);
    },
    onDragOver: e => {
      e.preventDefault();
      const json = e.dataTransfer.getData('application/json');
      const position: Position = JSON.parse(json);
      console.debug({ message: 'dragover', from: position });
    },
  };

  return (
    <div
      className={cls(classes.tile, {
        [classes.tileDark]: color === 'dark',
        [classes.tileLight]: color === 'light',
      })}
      style={styles.div}
      {...handlers}
    >
      {children}
    </div>
  );
};

export default Tile;
