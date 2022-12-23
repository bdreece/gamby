import type { FC } from 'react';

import { Burger } from '../common';
import classes from '../../styles/Navbar.module.scss';

const Navbar: FC = () => (
  <nav className={classes.navbar}>
    <h1>Gamby</h1>
    <Burger />
  </nav>
);

export default Navbar;
