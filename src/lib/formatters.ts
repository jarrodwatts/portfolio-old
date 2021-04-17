export const toDate = (date: string): string => {
  const x = new Date(date);
  return x.toLocaleDateString();
};

export const upperFirst = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};