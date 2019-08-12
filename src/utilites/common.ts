/** */
export const uniqueId = (): string => {
  return Math.random().toString(36).substr(2, 16);
};

export const parseData = (date: Date): string => {
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
}