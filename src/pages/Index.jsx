import React, { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { TaskList } from '@/components/TaskList';
import { TaskForm } from '@/components/TaskForm';
import { CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-indigo-600 p-6 text-white">
          <h1 className="text-3xl font-bold flex items-center">
            <CalendarDays className="mr-2" />
            Daily Life Manager
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Select Date</h2>
            <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Tasks for {selectedDate.toDateString()}
            </h2>
            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
            <TaskForm onAddTask={addTask} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
