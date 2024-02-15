import sum from "../sum.js";
describe("sum.js", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 2 + 3 to equal 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  //error tests
  it("adds 1 + 2 to equal 4", () => {
    expect(sum(1, 2)).toBe(4);
  });
  it("adds 2 + 3 to equal 6", () => {
    expect(sum(2, 3)).toBe(6);
  });

  //negative tests
  it("adds -1 + -2 to equal -3", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  it("adds -2 + -3 to equal -5", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  //wrong variable type

  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, "2")).toBe(3);
  });
});
