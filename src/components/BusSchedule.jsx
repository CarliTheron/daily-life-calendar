import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bus, Star, Edit, Trash2, Search, Map, Heart } from 'lucide-react';
import { BusScheduleForm } from './BusScheduleForm';
import { BusRouteDetails } from './BusRouteDetails';
import { BusRouteMap } from './BusRouteMap';
import { motion, AnimatePresence } from 'framer-motion';

export const BusSchedule = ({ schedules, onAddSchedule, onEditSchedule, onDeleteSchedule, onToggleFavorite }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedSchedules = React.useMemo(() => {
    let sortableSchedules = [...schedules];
    if (sortConfig.key !== null) {
      sortableSchedules.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableSchedules;
  }, [schedules, sortConfig]);

  const filteredSchedules = sortedSchedules.filter(
    (bus) =>
      bus.line.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 border-2 border-anime-yellow">
      <h2 className="text-2xl font-semibold text-anime-blue mb-4 flex items-center">
        <Bus className="mr-2 text-anime-green" />
        Magical Bus Schedule
      </h2>
      <div className="flex justify-between mb-4">
        <Button 
          onClick={() => setIsFormOpen(true)} 
          className="bg-anime-green hover:bg-anime-blue text-white"
        >
          Add New Bus Schedule
        </Button>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search schedules..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
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
            <TableHead className="text-anime-blue cursor-pointer" onClick={() => handleSort('line')}>Line</TableHead>
            <TableHead className="text-anime-blue cursor-pointer" onClick={() => handleSort('destination')}>Destination</TableHead>
            <TableHead className="text-anime-blue cursor-pointer" onClick={() => handleSort('departureTime')}>Departure Time</TableHead>
            <TableHead className="text-anime-blue">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence>
            {filteredSchedules.map((bus) => (
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
                    className="mr-2 text-anime-pink hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onToggleFavorite(bus.id)}
                    className={`mr-2 ${bus.isFavorite ? 'text-anime-pink' : 'text-gray-400'} hover:text-anime-pink`}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedRoute(bus)}
                    className="text-anime-green hover:text-anime-blue"
                  >
                    <Map className="h-4 w-4" />
                  </Button>
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
      {selectedRoute && (
        <BusRouteDetails
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}
      {selectedRoute && (
        <BusRouteMap
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </div>
  );
};
