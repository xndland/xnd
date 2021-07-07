declare const build: unique symbol;

declare global {
  interface ObjectConstructor {
    [build]<K extends PropertyKey = PropertyKey, V = unknown>(
      generate: () => Generator<readonly [K, V]>
    ): Record<K, V>;
  }
  interface ArrayConstructor {
    [build]<T>(generate: () => Generator<T>): Array<T>;
  }
  interface MapConstructor {
    [build]<K, V>(generate: () => Generator<readonly [K, V]>): Map<K, V>;
  }
  interface SetConstructor {
    [build]<T>(generate: () => Generator<T>): Set<T>;
  }
  interface WeakMapConstructor {
    [build]<K extends object, V>(
      generate: () => Generator<readonly [K, V]>
    ): WeakMap<K, V>;
  }
  interface WeakSetConstructor {
    [build]<T extends object>(generate: () => Generator<T>): WeakSet<T>;
  }
}

export default build;
