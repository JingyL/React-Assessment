const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("function works", () => { 
    expect(addCommas(3000)).toBe("3,000");
  });
  test("function works", () => { 
    expect(addCommas(-21)).toBe("-21");
  });
  test("function works", () => { 
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });
  test("function works", () => { 
    expect(addCommas(300)).toBe("300");
  });
  test("function works", () => { 
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
