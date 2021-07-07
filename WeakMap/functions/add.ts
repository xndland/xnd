export default function add<K extends object, V>(
  this: WeakMap<K, V>,
  [key, value]: [K, V]
): WeakMap<K, V> {
  return this.set(key, value);
}
