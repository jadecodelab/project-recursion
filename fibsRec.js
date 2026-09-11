const fibsRec = function (n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, next];
};

module.exports = fibsRec;

// npm test fibsRec.test.js
