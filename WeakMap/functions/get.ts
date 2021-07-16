export default function getOrSet<K extends object, V>(
  this: WeakMap<K, V>,
  key: K
): V | undefined {
  return this.get(key);
}
