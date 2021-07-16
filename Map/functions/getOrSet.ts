export default function getOrSet<K, V>(
  this: Map<K, V>,
  key: K,
  defaultValue: () => V
): V {
  if (this.has(key)) return this.get(key)!;
  const value = defaultValue();
  this.set(key, value);
  return value;
}
