'use client';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { useProperty } from '@/utils/store';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import {
  defaultSelected,
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
} from '@/utils/calendar';

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const { toast } = useToast();

  const blockedPeriods = generateBlockedPeriods({ bookings, today: currentDate });

  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({ description: 'Some dates are booked. Please select again' });
        return true;
      }
      return false;
    });

    useProperty.setState({ range });
  }, [range]);

  return (
    <div>
      <Calendar
        mode="range"
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className="mb-4"
        disabled={blockedPeriods}
      />
    </div>
  );
};

export default BookingCalendar;
