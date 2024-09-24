import React from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';

export const Calendar = ({ selectedDate, onChange }) => {
  return (
    <CalendarUI
      mode="single"
      selected={selectedDate}
      onSelect={onChange}
      className="rounded-md border"
    />
  );
};