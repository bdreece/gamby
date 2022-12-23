import type { FC } from 'react';

import { GameStateProvider } from '../components/providers';
import { Board } from '../components/common';

const Game: FC = () => (
  <article>
    <h2>Game</h2>
    <section>
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
