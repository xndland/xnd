import compareTo from "./compareTo.ts";

import { assertSign } from "../_deps_test.ts";

const testValues = ["", "42", "A", "a", "cinema", "iceman", "😍", "🤪"];

Deno.test("returns 0 for equal string", () => {
  for (const value of testValues) assertSign(value[compareTo](value), 0);
});

Deno.test("returns negative values for lesser strings", () => {
  for (let i = 0, a = testValues[i]; i < testValues.length; i++)
    for (let j = i + 1, b = testValues[j]; j < testValues.length; j++)
      assertSign(a[compareTo](b), -1);
});

Deno.test("returns positive values for greater strings", () => {
  for (let i = 1, a = testValues[i]; i < testValues.length; i++)
    for (let j = 0, b = testValues[j]; j < i; j++)
      assertSign(a[compareTo](b), +1);
});

Deno.test("coerces booleans to strings", () => {
  assertSign("false"[compareTo](false), 0);
  assertSign("false"[compareTo](true), -1);
  assertSign("true"[compareTo](true), 0);
  assertSign("true"[compareTo](false), 1);
});

Deno.test("coerces bigints to strings", () => {
  assertSign("0"[compareTo](0n), 0);
  assertSign("0"[compareTo](1n), -1);
  assertSign("1"[compareTo](1n), 0);
  assertSign("1"[compareTo](0n), 1);
});
