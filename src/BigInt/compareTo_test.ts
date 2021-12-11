import compareTo from "./compareTo.ts";

import { assertSign, assertThrows } from "../_deps_test.ts";

const testValues = [
  -BigInt(Number.MAX_VALUE) * 2n,
  -BigInt(Number.MAX_VALUE),
  -BigInt(Number.MAX_VALUE) / 2n,
  BigInt(Number.MIN_SAFE_INTEGER) - 1n,
  BigInt(Number.MIN_SAFE_INTEGER),
  BigInt(Number.MIN_SAFE_INTEGER) + 1n,
  -123n,
  -1n,
  0n,
  1n,
  123n,
  BigInt(Number.MAX_SAFE_INTEGER) - 1n,
  BigInt(Number.MAX_SAFE_INTEGER),
  BigInt(Number.MAX_SAFE_INTEGER) + 1n,
  BigInt(Number.MAX_VALUE) / 2n,
  BigInt(Number.MAX_VALUE),
  BigInt(Number.MAX_VALUE) * 2n,
];

Deno.test("returns 0 for equal bigints", () => {
  for (const value of testValues) assertSign(value[compareTo](value), 0);
});

Deno.test("returns negative values for lesser bigints", () => {
  for (let i = 0, a = testValues[i]; i < testValues.length; i++)
    for (let j = i + 1, b = testValues[j]; j < testValues.length; j++)
      assertSign(a[compareTo](b), -1);
});

Deno.test("returns positive values for greater bigints", () => {
  for (let i = 1, a = testValues[i]; i < testValues.length; i++)
    for (let j = 0, b = testValues[j]; j < i; j++)
      assertSign(a[compareTo](b), +1);
});

Deno.test("coerces booleans to bigints", () => {
  assertSign(0n[compareTo](false), 0);
  assertSign(0n[compareTo](true), -1);
  assertSign(1n[compareTo](true), 0);
  assertSign(1n[compareTo](false), 1);
});

Deno.test("coerces numbers to bigints", () => {
  assertSign(0n[compareTo](0), 0);
  assertSign(0n[compareTo](1), -1);
  assertSign(1n[compareTo](1), 0);
  assertSign(1n[compareTo](0), 1);
});

Deno.test("coerces numerical strings to bigints", () => {
  assertSign(0n[compareTo]("0"), 0);
  assertSign(0n[compareTo]("1"), -1);
  assertSign(1n[compareTo]("1"), 0);
  assertSign(1n[compareTo]("0"), 1);
});

Deno.test("throws coercing non-numeric string", () => {
  assertThrows(() => 0n[compareTo]("a"), SyntaxError, "Cannot convert");
});

Deno.test("throws coercing non-numeric-like values", () => {
  for (const nonNumericLikeValue of [undefined, null, Symbol()])
    assertThrows(
      () => 0n[compareTo](nonNumericLikeValue),
      TypeError,
      "Cannot convert"
    );
});
