import CompareFunction from "./CompareFunction.ts";

import compareBy from "./comparisons/compareBy.ts";
import compareValues from "./comparisons/compareValues.ts";

import { assert, assertEquals, assertNotStrictEquals } from "./_deps_test.ts";

Deno.test("natural sort", () => {
  const compareFn = new CompareFunction<number>((a, b) => a - b);
  assertEquals([+1, 0, -1].sort(compareFn), [-1, 0, +1]);
});

Deno.test("reversed sort", () => {
  const compareFn = new CompareFunction<number>((a, b) => a - b).reversed();
  assertEquals([-1, 0, +1].sort(compareFn), [+1, 0, -1]);
});

Deno.test("secondary sort", () => {
  const compareFn = new CompareFunction<string>(
    (a, b) => a.length - b.length
  ).then(compareValues);
  assertEquals(["a", "aa", "b", "ab"].sort(compareFn), ["a", "b", "aa", "ab"]);
});

Deno.test("secondary sort-by", () => {
  const compareFn = new CompareFunction<string>(
    compareBy((string: string) => string.slice(-1))
  ).thenBy("length");
  assertEquals(["aba", "za", "bab", "zb"].sort(compareFn), [
    "za",
    "aba",
    "zb",
    "bab",
  ]);
});

Deno.test("secondary sort-by-descending", () => {
  const compareFn = new CompareFunction<string>(
    compareBy((string: string) => string.slice(-1))
  ).thenByDescending("length");
  assertEquals(["aba", "za", "bab", "zb"].sort(compareFn), [
    "aba",
    "za",
    "bab",
    "zb",
  ]);
});

Deno.test(
  "CompareFunction.prototype.reversed returns a new CompareFunction",
  () => {
    const compareFn = compareBy<{ age: number }>("age");
    const compareFn2 = compareFn.reversed();
    assert(compareFn2 instanceof CompareFunction);
    assertNotStrictEquals(compareFn2, compareFn);
  }
);

Deno.test(
  "CompareFunction.prototype.then returns a new CompareFunction",
  () => {
    const compareFn = compareBy<{ age: number }>("age");
    const compareFn2 = compareFn.then(() => 0);
    assert(compareFn2 instanceof CompareFunction);
    assertNotStrictEquals(compareFn2, compareFn);
  }
);

Deno.test(
  "CompareFunction.prototype.thenBy returns a new CompareFunction",
  () => {
    const compareFn = compareBy<{ age: number }>("age");
    const compareFn2 = compareFn.thenBy("age");
    assert(compareFn2 instanceof CompareFunction);
    assertNotStrictEquals(compareFn2, compareFn);
  }
);

Deno.test(
  "CompareFunction.prototype.thenByDescending returns a new CompareFunction",
  () => {
    const compareFn = compareBy<{ age: number }>("age");
    const compareFn2 = compareFn.thenByDescending("age");
    assert(compareFn2 instanceof CompareFunction);
    assertNotStrictEquals(compareFn2, compareFn);
  }
);
