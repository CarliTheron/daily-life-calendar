import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const UserLevel = ({ level, experience, experienceToNextLevel }) => {
  const progress = (experience / experienceToNextLevel) * 100;

  return (
    <motion.div 
      className="bg-anime-blue bg-opacity-20 p-4 rounded-lg shadow-md border-2 border-anime-yellow"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-anime-pink flex items-center mb-2">
        <Star className="mr-2 text-anime-yellow" />
        Senpai Level: {level}
      </h2>
      <Progress value={progress} className="h-2 mb-2" />
      <p className="text-sm text-anime-green">
        EXP: {experience} / {experienceToNextLevel}
      </p>
    </motion.div>
  );
};