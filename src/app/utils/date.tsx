const getYesterday = () => {
  const date = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .slice(0, 10);
  return date;
};

export { getYesterday };
