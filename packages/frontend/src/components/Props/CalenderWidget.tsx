import { Calendar } from "@/components/ui/calendar";

interface CalendarWidgetProps {
  selectedDate: Date;
  onDateChange: (date: Date | undefined) => void;
}

export function CalendarWidget({
  selectedDate,
  onDateChange,
}: CalendarWidgetProps) {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onDateChange}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
}

export default CalendarWidget;
