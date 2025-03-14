import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

interface CardCalendarProps {
  className?: string;
}

const CardCalendar = ({ className }: CardCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  registerLocale("ko", ko);

  return (
    <DatePicker
      className={className}
      locale="ko"
      selected={selectedDate}
      onChange={(date) => setSelectedDate((prev) => date ?? prev)}
      dateFormat="yyyy. M. d"
    />
  );
};

export default CardCalendar;
