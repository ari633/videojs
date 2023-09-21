import { getTimer } from "../src/index";

test('test valid timer', () => {
  expect(getTimer(600)).toBe('10 : 00');
});