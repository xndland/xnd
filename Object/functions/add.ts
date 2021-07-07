export default function add<K extends PropertyKey, V>(
  this: Record<K, V>,
  [key, value]: [K, V]
): Record<K, V> {
  this[key] = value;
  return this;
}
