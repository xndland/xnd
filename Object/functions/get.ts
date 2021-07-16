/** @experimental */
export default function get<K extends PropertyKey, V>(
  this: Record<K, V>,
  key: K
): V | undefined {
  return this[key];
}
