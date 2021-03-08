module.exports = function countCats(matrix) {
  let k = 0;
  matrix.map(function (item) {
    item.map(function (b) {
      if (b == "^^") k += 1;
    });
  });

  return k;
};
