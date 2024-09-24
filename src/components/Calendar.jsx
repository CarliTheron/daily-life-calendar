import React from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

export const Calendar = ({ selectedDate, onChange, daysWithTasks }) => {
  return (
    <CalendarUI
      mode="single"
      selected={selectedDate}
      onSelect={onChange}
      className="rounded-md border border-indigo-200 p-3 bg-white shadow-md"
      modifiers={{
        hasTask: (date) => daysWithTasks.some(taskDate => 
          taskDate.toDateString() === date.toDateString()
        )
      }}
      modifiersClassNames={{
        hasTask: "bg-indigo-100 font-bold text-indigo-600 rounded-full"
      }}
      components={{
        Day: ({ date, ...props }) => (
          <CalendarUI.Day 
            date={date} 
            {...props}
            className={cn(
              props.className,
              daysWithTasks.some(taskDate => taskDate.toDateString() === date.toDateString()) &&
              "bg-indigo-100 text-indigo-600 font-bold hover:bg-indigo-200"
            )}
          />
        )
      }}
    />
  );
};
