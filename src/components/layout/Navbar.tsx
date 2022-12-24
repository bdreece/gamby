import type { FC } from 'react';

import classes from '../../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar: FC = () => (
  <nav className={classes.navbar}>
    <h1>Gamby</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/game'>Game</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
