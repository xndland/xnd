import compareValuesBy from "./compareValuesBy.ts";

import { assertSign } from "../_test_deps.ts";

Deno.test("compares-by booleans", () => {
  assertSign(compareValuesBy({ value: false }, { value: false }, "value"), 0);
  assertSign(compareValuesBy({ value: false }, { value: true }, "value"), -1);
  assertSign(compareValuesBy({ value: true }, { value: false }, "value"), +1);
  assertSign(compareValuesBy({ value: true }, { value: true }, "value"), 0);
});

Deno.test("compares-by numbers", () => {
  assertSign(compareValuesBy({ value: 0 }, { value: 0 }, "value"), 0);
  assertSign(compareValuesBy({ value: 0 }, { value: 1 }, "value"), -1);
  assertSign(compareValuesBy({ value: 1 }, { value: 0 }, "value"), +1);
  assertSign(compareValuesBy({ value: 1 }, { value: 1 }, "value"), 0);
});

Deno.test("compares-by bigints", () => {
  assertSign(compareValuesBy({ value: 0n }, { value: 0n }, "value"), 0);
  assertSign(compareValuesBy({ value: 0n }, { value: 1n }, "value"), -1);
  assertSign(compareValuesBy({ value: 1n }, { value: 0n }, "value"), +1);
  assertSign(compareValuesBy({ value: 1n }, { value: 1n }, "value"), 0);
});

Deno.test("compares-by strings", () => {
  assertSign(compareValuesBy({ value: "0" }, { value: "0" }, "value"), 0);
  assertSign(compareValuesBy({ value: "0" }, { value: "1" }, "value"), -1);
  assertSign(compareValuesBy({ value: "1" }, { value: "0" }, "value"), +1);
  assertSign(compareValuesBy({ value: "1" }, { value: "1" }, "value"), 0);
});

Deno.test("compares-by Dates", () => {
  assertSign(
    compareValuesBy({ value: new Date(0) }, { value: new Date(0) }, "value"),
    0
  );
  assertSign(
    compareValuesBy({ value: new Date(0) }, { value: new Date(1) }, "value"),
    -1
  );
  assertSign(
    compareValuesBy({ value: new Date(1) }, { value: new Date(0) }, "value"),
    +1
  );
  assertSign(
    compareValuesBy({ value: new Date(1) }, { value: new Date(1) }, "value"),
    0
  );
});

Deno.test("treats same values as equal (even NaN)", () => {
  for (const value of [
    false,
    0,
    -0,
    0n,
    "",
    null,
    undefined,
    NaN,
    true,
    42,
    "0",
    "false",
    new Date(),
    -42,
    12n,
    3.14,
    -3.14,
    Infinity,
    -Infinity,
  ])
    assertSign(
      compareValuesBy(
        { value },
        { value },
        // @ts-expect-error unknown is not comparable
        "value"
      ),
      0
    );
});

Deno.test("treats undefined greater than defined values", () => {
  assertSign(
    compareValuesBy(
      { value: undefined },
      { value: undefined },
      // @ts-expect-error undefined is not comparable
      "value"
    ),
    0
  );
  assertSign(compareValuesBy({ value: 0 }, { value: undefined }, "value"), -1);
  assertSign(compareValuesBy({ value: undefined }, { value: -1 }, "value"), +1);
  assertSign(
    compareValuesBy(
      { value: undefined },
      { value: null },
      // @ts-expect-error neither undefined nor null is comparable
      "value"
    ),
    +1
  );
});

Deno.test("treats null less than other defined values", () => {
  assertSign(
    compareValuesBy(
      { value: null },
      { value: null },
      // @ts-expect-error null is not comparable
      "value"
    ),
    0
  );
  assertSign(compareValuesBy({ value: 0 }, { value: null }, "value"), +1);
  assertSign(compareValuesBy({ value: null }, { value: -1 }, "value"), -1);
  assertSign(
    compareValuesBy(
      { value: null },
      { value: undefined },
      // @ts-expect-error neither null nor undefined is comparable
      "value"
    ),
    -1
  );
});
