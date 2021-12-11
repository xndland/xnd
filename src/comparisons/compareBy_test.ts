import compareBy from "./compareBy.ts";

import CompareFunction from "../CompareFunction.ts";

import { assert, assertSign } from "../_deps_test.ts";

Deno.test("returns a CompareFunction", () => {
  const compareFn = compareBy<{ age: number }>("age");
  assert(compareFn instanceof CompareFunction);
});

Deno.test("compares-by string property key selector", () => {
  const compareFn = compareBy<{ name: string }>("name");
  assertSign(compareFn({ name: "Adam" }, { name: "Eve" }), -1);
  assertSign(compareFn({ name: "Adam" }, { name: "Adam" }), 0);
  assertSign(compareFn({ name: "Eve" }, { name: "Adam" }), +1);
});

Deno.test("compares-by number property key selector", () => {
  const compareFn = compareBy<string[]>(3);
  assertSign(compareFn(["a", "b", "c", "D"], ["a", "b", "c", "d"]), -1);
  assertSign(compareFn(["A", "b", "c", "d"], ["a", "B", "🤪", "d"]), 0);
  assertSign(compareFn(["a", "b", "c", "d"], ["a", "b", "c", "D"]), +1);
});

Deno.test("compares-by symbol property key selector", () => {
  const id = Symbol("id");
  const compareFn = compareBy<{ [id]: bigint }>(id);
  assertSign(compareFn({ [id]: 0n }, { [id]: 1n }), -1);
  assertSign(compareFn({ [id]: 1n }, { [id]: 1n }), 0);
  assertSign(compareFn({ [id]: 1n }, { [id]: 0n }), +1);
});

Deno.test("compares-by function selector", () => {
  const compareFn = compareBy<{ nested: { value: number } }>(
    ({ nested: { value } }) => value
  );
  assertSign(compareFn({ nested: { value: 1 } }, { nested: { value: 2 } }), -1);
  assertSign(compareFn({ nested: { value: 3 } }, { nested: { value: 3 } }), 0);
  assertSign(
    compareFn(
      { nested: { value: Infinity } },
      { nested: { value: -Infinity } }
    ),
    1
  );
});
