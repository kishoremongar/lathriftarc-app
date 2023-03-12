import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from '../pages/mainlayout';
import Login from '../pages/login/login';
import ErrorPage from '../pages/error';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Mainlayout />}>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
