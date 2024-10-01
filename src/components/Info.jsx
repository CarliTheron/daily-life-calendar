import React from 'react';
import { Input } from "@/components/ui/input";
import Navigation from './Navigation';

const Info = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4">
        <Input type="text" placeholder="Year: 2020" className="w-full" />
        <p className="mt-2 text-sm text-gray-600">365 results found</p>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold">January 1st</h2>
            <img src="/placeholder.svg" alt="Satellite Image" className="w-full h-48 object-cover rounded-lg mt-2" />
            <p className="text-sm text-gray-600 mt-2">Description of satellite image and weather conditions for this day.</p>
          </div>
          <div>
            <h2 className="font-semibold">January 2nd</h2>
            <img src="/placeholder.svg" alt="Satellite Image" className="w-full h-48 object-cover rounded-lg mt-2" />
            <p className="text-sm text-gray-600 mt-2">Description of satellite image and weather conditions for this day.</p>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  );
};

export default Info;