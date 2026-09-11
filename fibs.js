const fibs = function (n) {
  if (n === 0) return [];

  if (n === 1) return [0];

  const arr = [0, 1];

  while (arr.length < n) {
    const lastNum = arr[arr.length - 1];
    const secondLast = arr[arr.length - 2];

    arr.push(lastNum + secondLast);
  }

  return arr;
};

module.exports = fibs;

// npm test fibs.test.js
