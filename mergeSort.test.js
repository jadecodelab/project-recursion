const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
  test("Sort empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Sort one number", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("Sort two numbers", () => {
    expect(mergeSort([8, 3])).toEqual([3, 8]);
  });

  test("Sort long unsorted array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Sort sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
