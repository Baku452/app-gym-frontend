import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DashboardView } from './instructor/views/dashboard.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="instructor" element={<DashboardView />}></Route>
      </Routes>
    </div>
  );
}
// <Route path="/" element={<Home />}></Route>
// <Route path="about" element={<About />}></Route>

export default App;
