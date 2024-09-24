import React, { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { TaskList } from '@/components/TaskList';
import { TaskForm } from '@/components/TaskForm';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, date: selectedDate }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => 
    task.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Daily Life Manager</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Select Date</h2>
            <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tasks for {selectedDate.toDateString()}</h2>
            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
            <TaskForm onAddTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
