import type { FC } from 'react';

const Burger: FC = () => (
  <svg
    viewBox='0 0 100 80'
    width='64'
    height='64'
  >
    <rect
      width='100'
      height='10'
    />
    <rect
      y='30'
      width='100'
      height='10'
    />
    <rect
      y='60'
      width='100'
      height='10'
    />
  </svg>
);

export default Burger;
