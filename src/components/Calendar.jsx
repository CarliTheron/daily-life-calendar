import React from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';

export const Calendar = ({ selectedDate, onChange }) => {
  return (
    <CalendarUI
      mode="single"
      selected={selectedDate}
      onSelect={onChange}
      className="rounded-md border-2 border-anime-pink p-3 bg-white shadow-md"
      styles={{
        head_cell: { color: 'var(--anime-blue)' },
        day: { color: 'var(--anime-green)' },
        day_selected: { backgroundColor: 'var(--anime-pink)', color: 'white' },
        day_today: { color: 'var(--anime-yellow)' },
      }}
    />
  );
};
