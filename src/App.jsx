import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from './components/Login';
import MainScreen from './components/MainScreen';
import Info from './components/Info';
import DetailCard from './components/DetailCard';
import Profile from './components/Profile';
import DensityMap from './components/DensityMap';

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/info" element={<Info />} />
        <Route path="/detail" element={<DetailCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/density-map" element={<DensityMap />} />
      </Routes>
    </Router>
  </TooltipProvider>
);

export default App;