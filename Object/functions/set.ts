/** @experimental */
export default function set<K extends PropertyKey, V>(
  this: Record<K, V>,
  key: K,
  value: V
): Record<K, V> {
  this[key] = value;
  return this;
}
