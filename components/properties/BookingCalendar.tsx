'use client';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const defaultSelected: DateRange = {
  from: undefined,
  to: undefined,
};

export default function App() {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Calendar
      id="test"
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
}
