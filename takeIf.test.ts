import takeIf from "./takeIf.js";

import { assertStrictEquals } from "./_test_deps.ts";

Deno.test("Object.prototype[takeIf]<true>", () => {
  const expected = { answer: 42 };
  const actual = expected[takeIf]((value) => "answer" in value);
  assertStrictEquals(actual, expected);
});

Deno.test("Object.prototype[takeIf]<false>", () => {
  const notExpected = { answer: 42 };
  const expected = undefined;
  const actual = notExpected[takeIf]((value) => "question" in value);
  assertStrictEquals(actual, expected);
});
