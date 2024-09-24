import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bus, Star } from 'lucide-react';

const busSchedule = [
  { id: 1, line: '101', destination: 'Anime Convention', departureTime: '08:00' },
  { id: 2, line: '202', destination: 'Maid Cafe', departureTime: '08:15' },
  { id: 3, line: '303', destination: 'Akihabara', departureTime: '08:30' },
  { id: 4, line: '101', destination: 'Anime Convention', departureTime: '08:45' },
];

export const BusSchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 border-2 border-anime-yellow">
      <h2 className="text-2xl font-semibold text-anime-blue mb-4 flex items-center">
        <Bus className="mr-2 text-anime-green" />
        Magical Bus Schedule
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-anime-pink bg-opacity-20">
            <TableHead className="text-anime-blue">Line</TableHead>
            <TableHead className="text-anime-blue">Destination</TableHead>
            <TableHead className="text-anime-blue">Departure Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {busSchedule.map((bus) => (
            <TableRow key={bus.id} className="hover:bg-anime-yellow hover:bg-opacity-10">
              <TableCell className="font-medium text-anime-green">{bus.line}</TableCell>
              <TableCell className="text-anime-blue flex items-center">
                <Star className="h-4 w-4 mr-2 text-anime-yellow" />
                {bus.destination}
              </TableCell>
              <TableCell className="text-anime-pink">{bus.departureTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
