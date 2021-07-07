import then from "./then.ts";

import {
  assert,
  assertEquals,
  assertStrictEquals,
  fail,
} from "../_test_deps.ts";

Deno.test("Promise.prototype[then]<string>", async () => {
  const expected = "hello";
  const actual = await Promise.resolve("hello")[then]();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<number>", async () => {
  const expected = 42;
  const actual = await Promise.resolve(42)[then]();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<bigint>", async () => {
  const expected = 42n;
  const actual = await Promise.resolve(42n)[then]();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<boolean>", async () => {
  const expected = true;
  const actual = await Promise.resolve(true)[then]();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<symbol>", async () => {
  const expected = Symbol.for("mine");
  const actual = await Promise.resolve(Symbol.for("mine"))[then]();
  assertStrictEquals(actual, expected);
});

Deno.test(
  "Promise.prototype[then]<string><String.prototype.length>",
  async () => {
    const expected = "hello".length;
    const actual = await Promise.resolve("hello")[then]().length;
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<number><Number.prototype.toFixed>",
  async () => {
    const expected = "42.00";
    const actual = await Promise.resolve(42)[then]().toFixed(2);
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<bigint><BigInt.prototype.toString>",
  async () => {
    const expected = "2a";
    const actual = await Promise.resolve(42n)[then]().toString(16);
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<boolean><Object.prototype.toString>",
  async () => {
    const expected = "true";
    const actual = await Promise.resolve(true)[then]().toString();
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<symbol><Symbol.prototype.description>",
  async () => {
    const expected = "mine";
    const actual = await Promise.resolve(Symbol.for("mine"))[then]()
      .description;
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<string><String.prototype.repeat><String.prototype.length>",
  async () => {
    const expected = 2 * "hello".length;
    const actual = await Promise.resolve("hello")[then]().repeat(2).length;
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<string><String.prototype.length><Number.prototype.toFixed>",
  async () => {
    const expected = "hello".length.toFixed(42);
    const actual = await Promise.resolve("hello")[then]().length.toFixed(42);
    assertStrictEquals(actual, expected);
  }
);

Deno.test(
  "Promise.prototype[then]<object><accessing deeply nested property>",
  async () => {
    const value = { a: { b: { c: "hello" } } };
    const expected = value.a.b.c;
    const actual = await Promise.resolve(value)[then]().a.b.c;
    assertStrictEquals(actual, expected);
  }
);

Deno.test("Promise.prototype[then]<function><apply>", async () => {
  const fn = () => 42;
  const expected = fn();
  const actual = await Promise.resolve(fn)[then]()();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<constructor><construct>", async () => {
  class Foo {
    constructor(readonly answer = -1) {}
  }
  const expected = new Foo(42);
  const actual = await new (Promise.resolve(Foo)[then]())(42);
  assertEquals(actual, expected);
});

declare class Foo {
  constructor(answer?: number);
}

function Foo(answer = -1) {
  if (new.target) {
    return { answer };
  }
  return answer;
}

Deno.test("Promise.prototype[then]<class-function><apply>", async () => {
  const expected = Foo(42);
  const actual = await Promise.resolve(Foo)[then]()(42);
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<class-function><construct>", async () => {
  const expected = new Foo(42);
  const actual = await new (Promise.resolve(Foo)[then]())(42);
  assertEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<Promise>", async () => {
  const expected = 42;
  const actual = await Promise.resolve(Promise.resolve(42))[then]();
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<any><Promise.prototype.then>", async () => {
  const expected = 42 ** 2;
  const actual = await Promise.resolve(42)
    [then]()
    .then((n) => n ** 2);
  assertStrictEquals(actual, expected);
});

Deno.test("Promise.prototype[then]<any><Promise.prototype.catch>", async () => {
  const expected = "-1.00";
  const actual = await Promise.resolve(Promise.reject<number>())
    [then]()
    .catch(() => -1)
    [then]()
    .toFixed(2);
  assertStrictEquals(actual, expected);
});

Deno.test(
  "Promise.prototype[then]<any><Promise.prototype.finally>",
  async () => {
    let called = false;
    try {
      await Promise.resolve(Promise.reject<number>())
        [then]()
        .finally(() => (called = true));
      fail("promise was not rejected as expected");
    } catch {
      assert(called);
    }
  }
);
