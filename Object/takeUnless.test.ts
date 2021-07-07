import takeUnless from "./takeUnless.ts";

import { assertStrictEquals } from "../_test_deps.ts";

Deno.test("Object.prototype[takeUnless]<true>", () => {
  const notExpected = { answer: 42 };
  const expected = undefined;
  const actual = notExpected[takeUnless]((value) => "answer" in value);
  assertStrictEquals(actual, expected);
});

Deno.test("Object.prototype[takeUnless]<false>", () => {
  const expected = { answer: 42 };
  const actual = expected[takeUnless]((value) => "question" in value);
  assertStrictEquals(actual, expected);
});
