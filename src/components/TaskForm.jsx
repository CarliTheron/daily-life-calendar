import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
        className="flex-grow"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};