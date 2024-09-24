import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export const BusRouteDetails = ({ route, onClose }) => {
  return (
    <Dialog open={!!route} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-anime-blue">Bus Route Details</DialogTitle>
          <DialogDescription>
            Information about bus route {route.line}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold text-anime-pink">Line:</span>
            <span className="col-span-3">{route.line}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold text-anime-pink">Destination:</span>
            <span className="col-span-3">{route.destination}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold text-anime-pink">Departure:</span>
            <span className="col-span-3">{route.departureTime}</span>
          </div>
          {/* Add more details as needed */}
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