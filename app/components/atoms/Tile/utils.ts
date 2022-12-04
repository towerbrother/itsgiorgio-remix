import { format } from 'date-fns';

export const formatDate = (
  startDate: Date,
  endDate: Date | string,
  dateFormat: string
) => {
  const formatted = `${format(startDate, dateFormat)} - ${
    typeof endDate === 'string' ? endDate : format(endDate, dateFormat)
  }`;
  return formatted;
};
