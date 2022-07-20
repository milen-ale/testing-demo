const strLength = (str) => {
  if (str.length < 1 || str.length > 10) throw new Error('Wrong format');
  return str.length;
};

module.exports = strLength;
