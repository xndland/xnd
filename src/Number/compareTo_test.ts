import compareTo from "./compareTo.ts";

import { assertSign, assertThrows } from "../_deps_test.ts";

const testValues = [
  -Infinity,
  -Number.MAX_VALUE,
  Number.MIN_SAFE_INTEGER,
  -123,
  -1,
  -Number.MIN_VALUE,
  0,
  Number.MIN_VALUE,
  1,
  123,
  Number.MAX_SAFE_INTEGER,
  Number.MAX_VALUE,
  Infinity,
];

Deno.test("returns 0 for equal numbers", () => {
  for (const value of testValues) assertSign(value[compareTo](value), 0);
});

Deno.test("returns 0 for NaN", () => {
  assertSign(NaN[compareTo](NaN), 0);
  assertSign((0)[compareTo](NaN), 0);
  assertSign(NaN[compareTo](0), 0);
});

Deno.test("returns negative values for lesser numbers", () => {
  for (let i = 0, a = testValues[i]; i < testValues.length; i++)
    for (let j = i + 1, b = testValues[j]; j < testValues.length; j++)
      assertSign(a[compareTo](b), -1);
});

Deno.test("returns positive values for greater numbers", () => {
  for (let i = 1, a = testValues[i]; i < testValues.length; i++)
    for (let j = 0, b = testValues[j]; j < i; j++)
      assertSign(a[compareTo](b), +1);
});

Deno.test("coerces booleans to numbers", () => {
  assertSign((0)[compareTo](false), 0);
  assertSign((0)[compareTo](true), -1);
  assertSign((1)[compareTo](true), 0);
  assertSign((1)[compareTo](false), 1);
});

Deno.test("coerces bigints to numbers", () => {
  assertSign((0)[compareTo](0n), 0);
  assertSign((0)[compareTo](1n), -1);
  assertSign((1)[compareTo](1n), 0);
  assertSign((1)[compareTo](0n), 1);

  assertSign(Infinity[compareTo](BigInt(Number.MAX_VALUE) * 2n), 0);
  assertSign(Infinity[compareTo](BigInt(Number.MAX_VALUE)), 1);
  assertSign((-Infinity)[compareTo](-BigInt(Number.MAX_VALUE) * 2n), 0);
  assertSign((-Infinity)[compareTo](-BigInt(Number.MAX_VALUE)), -1);
});

Deno.test("throws coercing symbols", () => {
  assertThrows(() => (0)[compareTo](Symbol()), TypeError, "Cannot convert");
});
