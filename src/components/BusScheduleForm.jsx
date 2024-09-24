import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export const BusScheduleForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    line: '',
    destination: '',
    departureTime: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: initialData ? initialData.id : Date.now() });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4 mb-6 bg-anime-yellow bg-opacity-10 p-4 rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        type="text"
        name="line"
        value={formData.line}
        onChange={handleChange}
        placeholder="Bus Line"
        className="border-anime-blue focus:ring-anime-pink"
        required
      />
      <Input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destination"
        className="border-anime-blue focus:ring-anime-pink"
        required
      />
      <Input
        type="time"
        name="departureTime"
        value={formData.departureTime}
        onChange={handleChange}
        className="border-anime-blue focus:ring-anime-pink"
        required
      />
      <div className="flex space-x-2">
        <Button type="submit" className="bg-anime-green hover:bg-anime-blue text-white">
          {initialData ? 'Update' : 'Add'} Schedule
        </Button>
        <Button type="button" onClick={onCancel} variant="outline" className="text-anime-pink hover:bg-anime-pink hover:text-white">
          Cancel
        </Button>
      </div>
    </motion.form>
  );
};