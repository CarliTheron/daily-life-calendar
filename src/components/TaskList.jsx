import React from 'react';
import { Trash2, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-anime-blue italic">No quests for this day, Senpai!</p>;
  }

  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between bg-anime-yellow bg-opacity-20 p-3 rounded-lg shadow-sm transition-all hover:shadow-md border-2 border-anime-yellow"
          >
            <span className="text-anime-blue flex items-center">
              <Star className="h-4 w-4 mr-2 text-anime-yellow" />
              {task.title}
            </span>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onCompleteTask(task.id)}
                className="text-anime-green hover:text-green-700 hover:bg-anime-green hover:bg-opacity-20"
              >
                <CheckCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteTask(task.id)}
                className="text-anime-pink hover:text-red-700 hover:bg-anime-pink hover:bg-opacity-20"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
