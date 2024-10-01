import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ZoomIn, ZoomOut, Menu } from 'lucide-react';
import Navigation from './Navigation';

const MainScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 flex justify-between items-center">
        <Button variant="ghost" size="icon"><MapPin className="h-6 w-6" /></Button>
        <div className="flex-1 mx-4">
          <Input type="text" placeholder="Search" className="w-full" />
        </div>
        <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <img src="/placeholder.svg" alt="Map" className="w-full h-48 object-cover rounded-lg" />
          <div>
            <h2 className="font-semibold">Today</h2>
            <p className="text-sm text-gray-600">Description of today's satellite image and weather conditions.</p>
          </div>
          <img src="/placeholder.svg" alt="Map" className="w-full h-48 object-cover rounded-lg" />
          <div>
            <h2 className="font-semibold">Tomorrow</h2>
            <p className="text-sm text-gray-600">Description of tomorrow's satellite image and weather conditions.</p>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default MainScreen;