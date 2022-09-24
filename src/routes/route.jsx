import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainlayout from '../pages/mainlayout';

export default function route() {
  return (
    <Router>
      <Routes>
        <Route index element={<Mainlayout />} />
      </Routes>
    </Router>
  );
}

/**<Route path= element={} />
        <Route path='' element={}/> */
