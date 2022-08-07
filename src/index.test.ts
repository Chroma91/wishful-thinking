import { hello } from ".";

describe("hello", () => {
  it("returns OK", () => {
    expect(hello()).toBe("OK");
  });
});
