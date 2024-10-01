import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, ZoomIn, ZoomOut, Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="flex justify-around items-center p-4 bg-white border-t">
      <Link to="/main"><MapPin className="h-6 w-6" /></Link>
      <Link to="/info"><Search className="h-6 w-6" /></Link>
      <Link to="/detail"><ZoomIn className="h-6 w-6" /></Link>
      <Link to="/profile"><ZoomOut className="h-6 w-6" /></Link>
      <Link to="/density-map"><Menu className="h-6 w-6" /></Link>
    </nav>
  );
};

export default Navigation;