import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

interface CardCalendarProps {
  onChange: (newDate: Date) => void;
  initialDate: Date;
  startDate?: Date;
}

const EditorCardCalendar = ({
  onChange,
  initialDate,
  startDate,
}: CardCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const onSelectDate = (newDate: Date | null) => {
    if (!newDate) {
      return;
    }
    setSelectedDate(newDate);
    onChange(newDate);
  };
  registerLocale("ko", ko);

  return (
    <DatePicker
      className="w-25 font-semibold"
      locale="ko"
      selected={selectedDate}
      onChange={onSelectDate}
      dateFormat="yyyy. M. d"
      minDate={startDate}
    />
  );
};

export default EditorCardCalendar;
