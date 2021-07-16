export default function set<K, V>(
  this: Map<K, V>,
  key: K,
  value: V
): Map<K, V> {
  return this.set(key, value);
}
