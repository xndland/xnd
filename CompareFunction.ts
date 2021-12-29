import type Selectors from "./Selectors.d.ts";

import compareValuesBy from "./comparisons/compareValuesBy.ts";

/**
 * Provides a fluent comparison API for building complex compare functions.
 */
export default interface CompareFunction<T> {
  /**
   * Compares two values for order.
   *
   * @returns zero for same, negative for before, and positive for after
   */
  (a: T, b: T): number;
}

export default class CompareFunction<T> extends Function {
  constructor(compareFn: (a: T, b: T) => number) {
    super();
    return new Proxy(this, {
      apply: (_target, thisArgument, argumentsList) =>
        Reflect.apply(compareFn, thisArgument, argumentsList),
    });
  }

  reversed(): CompareFunction<T> {
    return new CompareFunction((a, b) => this(b, a));
  }

  then(compareFn: (a: T, b: T) => number): CompareFunction<T> {
    return new CompareFunction((a, b) => this(a, b) || compareFn(a, b));
  }

  thenBy(...selectors: Selectors<T>): CompareFunction<T> {
    return new CompareFunction(
      (a, b) => this(a, b) || compareValuesBy(a, b, ...selectors)
    );
  }

  thenByDescending(...selectors: Selectors<T>): CompareFunction<T> {
    return new CompareFunction(
      (a, b) => this(a, b) || compareValuesBy(b, a, ...selectors)
    );
  }
}
