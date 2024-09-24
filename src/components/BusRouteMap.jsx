import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export const BusRouteMap = ({ route, onClose }) => {
  return (
    <Dialog open={!!route} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-anime-blue">Bus Route Map</DialogTitle>
          <DialogDescription>
            Map for bus route {route.line} to {route.destination}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* Placeholder for the map */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Map visualization placeholder for route {route.line}
          </div>
        </div>
        <DialogClose asChild>
          <Button className="absolute right-4 top-4" variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};