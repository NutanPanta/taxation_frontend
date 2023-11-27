const getDaysDiff = (date, dayOnly = false) => {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);

  if (dayOnly) {
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return days;
  }

  const year = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) / 365;
  const month = (year - Math.floor(year)) * 11.99203269061;
  const day = Math.floor((month - Math.floor(month)) * 30.436875);

  return { year: Math.floor(year), month: Math.floor(month), day };
};

export default getDaysDiff;
