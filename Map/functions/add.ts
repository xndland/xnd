export default function add<K, V>(
  this: Map<K, V>,
  [key, value]: readonly [K, V]
): Map<K, V> {
  return this.set(key, value);
}
