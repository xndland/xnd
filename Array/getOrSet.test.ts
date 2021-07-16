import getOrSet from "./getOrSet.ts";
import apply from "../apply.ts";

import { assertEquals, assertStrictEquals, fail } from "../_test_deps.ts";

Deno.test("Array.prototype[getOrSet]<non-negative>", () => {
  const actual = Array.of(1, 2, 3);
  assertStrictEquals(
    actual[getOrSet](0, () => fail()),
    actual[0]
  );
  assertStrictEquals(
    actual[getOrSet](1, () => fail()),
    actual[1]
  );
  assertStrictEquals(
    actual[getOrSet](2, () => fail()),
    actual[2]
  );
  assertStrictEquals(
    actual[getOrSet](3, () => 4),
    4
  );
  assertStrictEquals(
    actual[getOrSet](4, () => 5),
    5
  );
  assertStrictEquals(
    actual[getOrSet](Infinity, () => 42),
    42
  );
  assertEquals(
    actual,
    [1, 2, 3, 4, 5][apply](function () {
      this[Infinity] = 42;
    })
  );
});

Deno.test("Array.prototype[getOrSet]<negative>", () => {
  const actual = Array.of(1, 2, 3);
  assertStrictEquals(
    actual[getOrSet](-1, () => fail()),
    actual[2]
  );
  assertStrictEquals(
    actual[getOrSet](-2, () => fail()),
    actual[1]
  );
  assertStrictEquals(
    actual[getOrSet](-3, () => fail()),
    actual[0]
  );
  assertStrictEquals(
    actual[getOrSet](-4, () => 4),
    4
  );
  assertStrictEquals(
    actual[getOrSet](-5, () => 5),
    5
  );
  assertStrictEquals(
    actual[getOrSet](-Infinity, () => 42),
    42
  );
  assertEquals(
    actual,
    [1, 2, 3][apply](function () {
      this[-1] = 4;
      this[-2] = 5;
      this[-Infinity] = 42;
    })
  );
});
