import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import Navigation from './Navigation';

const DensityMap = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Viewing options</h1>
        <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold mb-2">Density map</h2>
            <img src="/placeholder.svg" alt="Density Map" className="w-full h-48 object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="font-semibold mb-2">Graphs</h2>
            <img src="/placeholder.svg" alt="Graphs" className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default DensityMap;