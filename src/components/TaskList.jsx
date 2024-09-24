import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic">No tasks for this day.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg shadow-sm transition-all hover:shadow-md">
          <span className="text-gray-800">{task.title}</span>
          <Button variant="ghost" size="icon" onClick={() => onDeleteTask(task.id)} className="text-red-500 hover:text-red-700 hover:bg-red-100">
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};
