const formatDate = (date: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const now = new Date(date).toLocaleDateString("ja-JP", options);

  return now;
};

export default formatDate;
