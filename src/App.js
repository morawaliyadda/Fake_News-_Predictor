import LandingPage from './screens/LandingPage';
import Dashboard from './screens/Dashboard';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />       
      
      </Routes>
     </Router>
    </div>
  );
}

export default App;
