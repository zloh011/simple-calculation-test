const { add, subtract, multiply, divide } = require("./cal");

const addTest = () => {
  expect(add(2, 1)).toBe(3);
};

const substractTest = () => {
  expect(subtract(2, 1)).toBe(1);
};

const multiplyTest = () => {
  expect(multiply(2, 1)).toBe(2);
};

const divideTest = () => {
  expect(divide(2, 1)).toBe(2);
};

test("Adding 2 to 1 equals 3", addTest);
test("Subtracting 2 to 1 equals 1", substractTest);
test("Multiplying 2 to 1 equals 2", multiplyTest);
test("Dividing 2 to 1 equals 2", divideTest);
