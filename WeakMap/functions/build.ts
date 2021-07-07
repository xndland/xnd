export default function build<K extends object, V>(
  generate: () => Iterable<readonly [K, V]>
): WeakMap<K, V> {
  // todo: remove cast once https://github.com/microsoft/TypeScript/issues/43900 is fixed
  return new WeakMap(generate() as Iterable<[K, V]>);
}
