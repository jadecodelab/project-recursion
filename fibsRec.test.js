const fibsRec = require("./fibsRec");

describe("fibonacci", () => {
  test("returns an empty array when n is 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("returns [0] when n is 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("returns [0,1] when n is 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("returns [0,1,1] when n is 3", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });

  test("returns the first 8 fibonacci numbers", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
