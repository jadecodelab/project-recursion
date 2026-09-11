const fibs = require("./fibs");

describe("fibonacci", () => {
  test("fibonacci of zero is zero", () => {
    expect(fibs(0)).toEqual([0]);
  });
});
