import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function Layout() {
  return (
    <div>
      <Header />

      <div style={{ marginLeft: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
