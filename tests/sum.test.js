import sum from "../sum.js";

describe("sum.js", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  //error tests
  it("\x1b[31madds 1 + 2 not to equal 4\x1b[0m", () => {
    expect(sum(1, 2)).not.toBe(4);
  });

  // Adding color to indicate failed tests
  it("\x1b[31madds 2 + 3 to not equal 6\x1b[0m", () => {
    expect(sum(2, 3)).not.toBe(6);
  });

  //negative tests
  it("adds -1 + -2 to equal -3", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  it("adds -2 + -3 to equal -5", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  //wrong variable type

  it("\x1b[31madds 1 + '2' not to equal 3\x1b[0m", () => {
    expect(sum(1, "2")).not.toBe(3);
  });
});
