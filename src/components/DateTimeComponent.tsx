import { Caption1Strong } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import './styleDate.css'

import {
  infoDatePicker,
  parseDateFromString,
} from "../utils/DateTimeHelper";

interface IDateTimeRosmel {
  text: string;
  value: string;
  placeholder?: string;
  onSelectDate: (date: Date | null | undefined) => void;
  minDate?: string;
  maxDate?: string;
  isFormatDateMinus18?: boolean;
}

const formatDate = (date?: Date): string => {
  if (!date) return "";
  try {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  } catch (error) {
    return "";
  }
};

export const DateTimeComponent = ({
  text,
  value,
  placeholder,
  onSelectDate,
  minDate,
  maxDate,
}: IDateTimeRosmel) => {

  const parsedMinDate = minDate ? new Date(parseDateFromString(minDate)) : undefined;
  const parsedMaxDate = maxDate ? new Date(parseDateFromString(maxDate)) : undefined;
  const parsedValue = value ? new Date(parseDateFromString(value)) : null;

  return (
    <div className="date-time-component">
      <Caption1Strong className="caption">{text}</Caption1Strong>
      <DatePicker
        minDate={parsedMinDate}
        maxDate={parsedMaxDate}
        value={parsedValue}
        placeholder={placeholder}
        strings={infoDatePicker}
        formatDate={formatDate}
        onSelectDate={onSelectDate}
        allowTextInput
      />
    </div>
  );
};
