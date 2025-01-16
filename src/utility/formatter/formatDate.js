export const formattedDate = (inputDate) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
