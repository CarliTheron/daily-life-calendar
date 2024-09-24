import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bus } from 'lucide-react';

const busSchedule = [
  { id: 1, line: '101', destination: 'Downtown', departureTime: '08:00' },
  { id: 2, line: '202', destination: 'Suburb', departureTime: '08:15' },
  { id: 3, line: '303', destination: 'Airport', departureTime: '08:30' },
  { id: 4, line: '101', destination: 'Downtown', departureTime: '08:45' },
];

export const BusSchedule = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        <Bus className="mr-2" />
        Bus Schedule
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Line</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Departure Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {busSchedule.map((bus) => (
            <TableRow key={bus.id}>
              <TableCell className="font-medium">{bus.line}</TableCell>
              <TableCell>{bus.destination}</TableCell>
              <TableCell>{bus.departureTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};