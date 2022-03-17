import { timesTwo } from "./functions";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

test("Build an order object", () => {
  const result = {
    orderItems: menuItems,
    total: 77,
  };
  expect(order(menuItems)).toEqual(result);
});
