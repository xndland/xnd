/** @experimental */
export default function getOrSet<K extends PropertyKey, V>(
  this: Record<K, V>,
  key: K,
  defaultValue: () => V
): V {
  if (Reflect.has(this, key)) return this[key];
  const value = defaultValue();
  this[key] = value;
  return value;
}
