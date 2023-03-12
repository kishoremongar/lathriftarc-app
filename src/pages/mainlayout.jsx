import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/navbar';
import LandingPage from './landing/landing';

export default function Mainlayout() {
  const location = useLocation();
  return (
    <div>
      <NavBar location={location} />
      {location?.pathname === '/' && <LandingPage />}
      <Outlet />
    </div>
  );
}
