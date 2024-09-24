import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic">No tasks for this day.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
          <span>{task.title}</span>
          <Button variant="ghost" size="icon" onClick={() => onDeleteTask(task.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};