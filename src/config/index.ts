


export const formatDateMonth = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
};
export const formatDateMonthShort = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short', // Use 'short' for abbreviated month names like Jan, Feb, etc.
  };
  return date.toLocaleDateString(undefined, options);
};
