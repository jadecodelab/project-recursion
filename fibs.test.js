const fibs = require("./fibs");

describe("fibonacci", () => {
  test("returns an empty array when n is 0", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("returns [0] when n is 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("returns [0,1] when n is 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("returns [0,1,1] when n is 3", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });

  test("returns the first 8 fibonacci numbers", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
