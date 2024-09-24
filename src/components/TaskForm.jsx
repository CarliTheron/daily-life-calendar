import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ id: Date.now(), title: title.trim() });
      setTitle('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-4 flex space-x-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new quest"
        className="flex-grow border-anime-blue focus:ring-anime-pink"
      />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button type="submit" className="bg-anime-green hover:bg-anime-blue text-white">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Quest
        </Button>
      </motion.div>
    </motion.form>
  );
};
