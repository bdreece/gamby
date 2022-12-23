import type { FC } from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const Layout: FC = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Copyright &copy; 2022 Brian Reece</footer>
  </>
);

export default Layout;
