import React, { useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { TaskList } from '@/components/TaskList';
import { TaskForm } from '@/components/TaskForm';
import { BusSchedule } from '@/components/BusSchedule';
import { UserLevel } from '@/components/UserLevel';
import { CalendarDays, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [busSchedules, setBusSchedules] = useState([
    { id: 1, line: '101', destination: 'Anime Convention', departureTime: '08:00' },
    { id: 2, line: '202', destination: 'Maid Cafe', departureTime: '08:15' },
    { id: 3, line: '303', destination: 'Akihabara', departureTime: '08:30' },
  ]);
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);

  const experienceToNextLevel = level * 100;

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, date: selectedDate }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    const newExperience = experience + 50;
    setExperience(newExperience);
    if (newExperience >= experienceToNextLevel) {
      setLevel(level + 1);
      setExperience(newExperience - experienceToNextLevel);
    }
  };

  const addBusSchedule = (newSchedule) => {
    setBusSchedules([...busSchedules, newSchedule]);
  };

  const editBusSchedule = (updatedSchedule) => {
    setBusSchedules(busSchedules.map(schedule => 
      schedule.id === updatedSchedule.id ? updatedSchedule : schedule
    ));
  };

  const deleteBusSchedule = (scheduleId) => {
    setBusSchedules(busSchedules.filter(schedule => schedule.id !== scheduleId));
  };

  const filteredTasks = tasks.filter(task => 
    task.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-anime-pink to-anime-blue p-8"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="bg-anime-blue p-6 text-white">
          <h1 className="text-3xl font-bold flex items-center">
            <Star className="mr-2 text-anime-yellow" />
            Anime Life Manager
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <UserLevel level={level} experience={experience} experienceToNextLevel={experienceToNextLevel} />
            <h2 className="text-2xl font-semibold text-anime-pink flex items-center">
              <CalendarDays className="mr-2 text-anime-blue" />
              Select Your Adventure Day
            </h2>
            <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
            <BusSchedule 
              schedules={busSchedules}
              onAddSchedule={addBusSchedule}
              onEditSchedule={editBusSchedule}
              onDeleteSchedule={deleteBusSchedule}
            />
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-anime-green">
              Quests for {selectedDate.toDateString()}
            </h2>
            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
            <TaskForm onAddTask={addTask} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
