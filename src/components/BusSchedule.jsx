import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Bus, Star, Edit, Trash2 } from 'lucide-react';
import { BusScheduleForm } from './BusScheduleForm';
import { motion, AnimatePresence } from 'framer-motion';

export const BusSchedule = ({ schedules, onAddSchedule, onEditSchedule, onDeleteSchedule }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);

  const handleEdit = (schedule) => {
    setEditingSchedule(schedule);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    onDeleteSchedule(id);
  };

  const handleFormSubmit = (schedule) => {
    if (editingSchedule) {
      onEditSchedule(schedule);
    } else {
      onAddSchedule(schedule);
    }
    setIsFormOpen(false);
    setEditingSchedule(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 border-2 border-anime-yellow">
      <h2 className="text-2xl font-semibold text-anime-blue mb-4 flex items-center">
        <Bus className="mr-2 text-anime-green" />
        Magical Bus Schedule
      </h2>
      <Button 
        onClick={() => setIsFormOpen(true)} 
        className="mb-4 bg-anime-green hover:bg-anime-blue text-white"
      >
        Add New Bus Schedule
      </Button>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BusScheduleForm
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingSchedule(null);
              }}
              initialData={editingSchedule}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Table>
        <TableHeader>
          <TableRow className="bg-anime-pink bg-opacity-20">
            <TableHead className="text-anime-blue">Line</TableHead>
            <TableHead className="text-anime-blue">Destination</TableHead>
            <TableHead className="text-anime-blue">Departure Time</TableHead>
            <TableHead className="text-anime-blue">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {schedules.map((bus) => (
              <motion.tr
                key={bus.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-anime-yellow hover:bg-opacity-10"
              >
                <TableCell className="font-medium text-anime-green">{bus.line}</TableCell>
                <TableCell className="text-anime-blue flex items-center">
                  <Star className="h-4 w-4 mr-2 text-anime-yellow" />
                  {bus.destination}
                </TableCell>
                <TableCell className="text-anime-pink">{bus.departureTime}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(bus)}
                    className="mr-2 text-anime-blue hover:text-anime-pink"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(bus.id)}
                    className="text-anime-pink hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
};
