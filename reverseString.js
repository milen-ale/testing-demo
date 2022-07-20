const reverseStr = (str) => {
  let revStr = '';
  // eslint-disable-next-line no-plusplus
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
};

module.exports = reverseStr;
