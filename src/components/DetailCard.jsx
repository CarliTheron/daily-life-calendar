import React from 'react';
import { Button } from "@/components/ui/button";
import { X, Upload } from 'lucide-react';

const DetailCard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">January 1st 2020</h1>
        <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <img src="/placeholder.svg" alt="Detailed Satellite Image" className="w-full h-64 object-cover rounded-lg" />
        <p className="mt-4 text-sm text-gray-600">
          Detailed description of the satellite image and the weather for this day. This includes information about temperature, precipitation, and any notable weather patterns or events.
        </p>
        <div className="mt-4 flex space-x-2">
          <Button className="flex-1 flex items-center justify-center">
            <Upload className="mr-2 h-4 w-4" /> Upload photo
          </Button>
          <Button variant="outline" className="flex-1">Transparency</Button>
        </div>
      </main>
    </div>
  );
};

export default DetailCard;