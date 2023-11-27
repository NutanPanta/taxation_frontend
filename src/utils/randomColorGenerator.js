const randomHSLA = (generateTimes = 1) => {
  return Array.from(Array(generateTimes)).map(
    () => `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
  );
};

export default randomHSLA;
