export default function getOrSet<K extends object, V>(
  this: WeakMap<K, V>,
  key: K,
  value: V
): V {
  this.set(key, value);
  return value;
}
