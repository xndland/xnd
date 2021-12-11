import sortBy from "./sortBy.ts";

import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("sorts-by in-place", () => {
  const values = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  values[sortBy]("value");
  assertEquals(values, [
    { value: 1 },
    { value: 2 },
    { value: 10 },
    { value: 20 },
  ]);
});

Deno.test("returns this", () => {
  const values = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  const returnValue = values[sortBy]("value");
  assertStrictEquals(returnValue, values);
});

Deno.test("sorts-by boolean", () => {
  const booleans = [
    { value: true },
    { value: false },
    { value: false },
    { value: true },
  ];
  assertEquals(booleans[sortBy]("value"), [
    { value: false },
    { value: false },
    { value: true },
    { value: true },
  ]);
});

Deno.test("sorts-by number", () => {
  const numbers = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  assertEquals(numbers[sortBy]("value"), [
    { value: 1 },
    { value: 2 },
    { value: 10 },
    { value: 20 },
  ]);
});

Deno.test("sorts-by bigint", () => {
  const bigints = [
    { value: 20n },
    { value: 2n },
    { value: 10n },
    { value: 1n },
  ];
  assertEquals(bigints[sortBy]("value"), [
    { value: 1n },
    { value: 2n },
    { value: 10n },
    { value: 20n },
  ]);
});

Deno.test("sorts-by ASCII string", () => {
  const strings = [
    { value: "c" },
    { value: "a" },
    { value: "b" },
    { value: "aab" },
    { value: "aaa" },
    { value: "" },
  ];
  assertEquals(strings[sortBy]("value"), [
    { value: "" },
    { value: "a" },
    { value: "aaa" },
    { value: "aab" },
    { value: "b" },
    { value: "c" },
  ]);
});

Deno.test("sorts-by Unicode string", () => {
  const strings = [
    { value: "😂" },
    { value: "Ｚ" },
    { value: "😀" },
    { value: "Z" },
  ];
  assertEquals(strings[sortBy]("value"), [
    { value: "Z" },
    { value: "😀" },
    { value: "😂" },
    { value: "Ｚ" },
  ]);
});

Deno.test("sorts-by Date", () => {
  const a = { value: new Date("2020-12-13T12:12:07") };
  const b = { value: new Date("2020-12-14T12:12:07") };
  const dates = [b, a];
  assertEquals(dates[sortBy]("value"), [a, b]);
});

Deno.test("throws sorting by non-comparable value", () => {
  const a = { value: Symbol("a") };
  const b = { value: Symbol("b") };
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [b, a][sortBy]("value"),
    TypeError,
    "is not a function"
  );
});

Deno.test("sorts-by string property key selector", () => {
  const a = { name: "Adam" };
  const b = { name: "Eve" };
  const persons = [b, a];
  assertEquals(persons[sortBy]("name"), [a, b]);
});

Deno.test("sorts-by number property key selector", () => {
  const a = [1, 2, 3];
  const b = [2, 3, 4];
  const c = [10, 20, 30];
  const arrays = [b, c, a];
  assertEquals(arrays[sortBy](1), [a, b, c]);
});

Deno.test("sorts-by symbol property key selector", () => {
  const a = { [Symbol.toStringTag]: "Adam" };
  const b = { [Symbol.toStringTag]: "Eve" };
  const persons = [b, a];
  assertEquals(persons[sortBy](Symbol.toStringTag), [a, b]);
});

Deno.test("sorts-by function selector", () => {
  const a = { message: "hello" };
  const b = { message: "goodbye" };
  const persons = [b, a];
  assertEquals(
    persons[sortBy](({ message }) => message.length),
    [a, b]
  );
});
