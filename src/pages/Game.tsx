import type { FC } from 'react';

import { GameStateProvider } from '../components/providers';
import { Board } from '../components/common';

import classes from '../styles/Game.module.scss';

const Game: FC = () => (
  <article className={classes.game}>
    <section>
      <h2>Game</h2>
      <p>Hello world!</p>
    </section>
    <section>
      <GameStateProvider userTeam='white'>
        <Board />
      </GameStateProvider>
    </section>
  </article>
);

export default Game;
