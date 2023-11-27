const duration = (date1, date2) => {
  if (date1 && date2) {
    const diffMs = new Date(date2) - new Date(date1); // milliseconds between two date
    const days = Math.floor(diffMs / 86400000); // days
    const hrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    const mins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    const secs = Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000); // seconds

    return { days, hrs, mins, secs };
  }
  return { days: 0, hrs: 0, mins: 0, secs: 0 };
};

export default duration;
