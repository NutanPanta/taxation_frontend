const formatDate = (date, time = false) => {
  return date && date instanceof Date && !isNaN(date)
    ? new Intl.DateTimeFormat(
        'en-US',
        time
          ? {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            }
          : {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }
      ).format(new Date(date))
    : null;
};

export default formatDate;
