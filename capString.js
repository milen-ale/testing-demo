const capString = (str) => {
  const [a, ...b] = str.split('');
  return a.toUpperCase() + b.join('');
};

module.exports = capString;
