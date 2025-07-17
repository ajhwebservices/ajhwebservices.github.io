import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LaunchPad from './components/LaunchPad';
import ArsenalPage from './pages/ArsenalPage';
import ShowcasePage from './pages/ShowcasePage';
import MindsetPage from './pages/MindsetPage';
import ConnectPage from './pages/ConnectPage';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path="/arsenal" element={<ArsenalPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/mindset" element={<MindsetPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </div>
  );
}

export default App;