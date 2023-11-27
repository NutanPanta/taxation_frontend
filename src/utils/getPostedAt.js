const getPostedAt = (d1, d2 = new Date()) => {
  // in miliseconds
  const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  let rtf = new Intl.RelativeTimeFormat('en', {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  });

  let elapsed = d1 - d2;

  for (let u in units) {
    if (Math.abs(elapsed) > units[u] || u == 'second') {
      let time = rtf.format(Math.round(elapsed / units[u]), u);

      return time;
    }
  }
};

export default getPostedAt;
