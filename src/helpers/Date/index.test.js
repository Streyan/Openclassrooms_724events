import { getMonth } from ".";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      expect(getMonth(new Date("2022-01-01"))).toBe("janvier");
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      expect(getMonth(new Date("2022-07-08"))).toBe("juillet");
    });
    it("the function return janvier for 2022-01-29T20:28:45.744Z as date", () => {
      expect(getMonth(new Date("2022-01-29T20:28:45.744Z"))).toBe("janvier");
    });
    it("the function return mars for 2022-03-29T20:28:45.744Z as date", () => {
      expect(getMonth(new Date("2022-03-29T20:28:45.744Z"))).toBe("mars");
    });
    it("the function return mai for 2022-05-29T20:28:45.744Z as date", () => {
      expect(getMonth(new Date("2022-05-29T20:28:45.744Z"))).toBe("mai");
    });
  });
});
