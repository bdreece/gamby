import type { FC } from 'react';
import type { ChildrenProps } from 'types/children';
import type { Styles } from 'types/styles';
import { useTileState } from '../providers';

import cls from 'classnames';
import classes from '../../styles/Tile.module.scss';

export type TileProps = ChildrenProps;

const Tile: FC<TileProps> = ({ children }) => {
  const { color, row, col } = useTileState();
  const styles: Styles = {
    div: {
      gridArea: `${col}${row}`,
    },
  };

  return (
    <div
      className={cls(classes.tile, {
        [classes.tileDark]: color === 'dark',
        [classes.tileLight]: color === 'light',
      })}
      style={styles.div}
    >
      {children}
    </div>
  );
};

export default Tile;
