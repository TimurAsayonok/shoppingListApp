// return rangod unique Id
export const uniqueId = (): string => {
  return Math.random().toString(36).substr(2, 16);
};

// parse date to format DD/MM/YYYY
export const parseData = (date: Date): string => {
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
};

// sort data by date
export const sortByDate = (first: string, second: string) => {
  const firstDate = new Date(first);
  const secondDate = new Date(second);

  const sortedIndex = firstDate > secondDate
    ? -1
    : firstDate < secondDate
      ? 1
      : 0;

  return sortedIndex;
};