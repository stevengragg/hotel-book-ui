"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

type Props = {};

const DatePicker = (props: Props) => {
  const [date, setDate] = React.useState<undefined | Date>(undefined);

  const handleSelectDate = (date: undefined | Date) => {
    setDate(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="primary"
          size="prime"
          className="w-full justify-between text-secondary font-semibold"
        >
          {date ? format(date, "d MMM") : <span>Pick a date</span>}
          <CalendarIcon className="mr-2 h-5 w-5 text-secondary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
