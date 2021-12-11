import sortByDescending from "./sortByDescending.ts";

import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "../_deps_test.ts";

Deno.test("sorts-by-descending in-place", () => {
  const values = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  values[sortByDescending]("value");
  assertEquals(values, [
    { value: 20 },
    { value: 10 },
    { value: 2 },
    { value: 1 },
  ]);
});

Deno.test("returns this", () => {
  const values = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  const returnValue = values[sortByDescending]("value");
  assertStrictEquals(returnValue, values);
});

Deno.test("sorts-by-descending boolean", () => {
  const booleans = [
    { value: true },
    { value: false },
    { value: false },
    { value: true },
  ];
  assertEquals(booleans[sortByDescending]("value"), [
    { value: true },
    { value: true },
    { value: false },
    { value: false },
  ]);
});

Deno.test("sorts-by-descending number", () => {
  const numbers = [{ value: 20 }, { value: 2 }, { value: 10 }, { value: 1 }];
  assertEquals(numbers[sortByDescending]("value"), [
    { value: 20 },
    { value: 10 },
    { value: 2 },
    { value: 1 },
  ]);
});

Deno.test("sorts-by-descending bigint", () => {
  const bigints = [
    { value: 20n },
    { value: 2n },
    { value: 10n },
    { value: 1n },
  ];
  assertEquals(bigints[sortByDescending]("value"), [
    { value: 20n },
    { value: 10n },
    { value: 2n },
    { value: 1n },
  ]);
});

Deno.test("sorts-by-descending ASCII string", () => {
  const strings = [
    { value: "c" },
    { value: "a" },
    { value: "b" },
    { value: "aab" },
    { value: "aaa" },
    { value: "" },
  ];
  assertEquals(strings[sortByDescending]("value"), [
    { value: "c" },
    { value: "b" },
    { value: "aab" },
    { value: "aaa" },
    { value: "a" },
    { value: "" },
  ]);
});

Deno.test("sorts-by-descending Unicode string", () => {
  const strings = [
    { value: "😂" },
    { value: "Ｚ" },
    { value: "😀" },
    { value: "Z" },
  ];
  assertEquals(strings[sortByDescending]("value"), [
    { value: "Ｚ" },
    { value: "😂" },
    { value: "😀" },
    { value: "Z" },
  ]);
});

Deno.test("sorts-by-descending Date", () => {
  const a = { value: new Date("2020-12-13T12:12:07") };
  const b = { value: new Date("2020-12-14T12:12:07") };
  const dates = [a, b];
  assertEquals(dates[sortByDescending]("value"), [b, a]);
});

Deno.test("throws sorting by non-comparable value", () => {
  const a = { value: Symbol("a") };
  const b = { value: Symbol("b") };
  assertThrows(
    // @ts-expect-error symbols are not comparable
    () => [a, b][sortByDescending]("value"),
    TypeError,
    "is not a function"
  );
});

Deno.test("sorts-by-descending string property key selector", () => {
  const a = { name: "Adam" };
  const b = { name: "Eve" };
  const persons = [a, b];
  assertEquals(persons[sortByDescending]("name"), [b, a]);
});

Deno.test("sorts-by-descending number property key selector", () => {
  const a = [1, 2, 3];
  const b = [2, 3, 4];
  const c = [10, 20, 30];
  const arrays = [a, c, b];
  assertEquals(arrays[sortByDescending](1), [c, b, a]);
});

Deno.test("sorts-by-descending symbol property key selector", () => {
  const a = { [Symbol.toStringTag]: "Adam" };
  const b = { [Symbol.toStringTag]: "Eve" };
  const persons = [a, b];
  assertEquals(persons[sortByDescending](Symbol.toStringTag), [b, a]);
});

Deno.test("sorts-by-descending function selector", () => {
  const a = { message: "hello" };
  const b = { message: "goodbye" };
  const persons = [a, b];
  assertEquals(
    persons[sortByDescending](({ message }) => message.length),
    [b, a]
  );
});
