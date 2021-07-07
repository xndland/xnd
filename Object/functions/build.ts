export default function build<K extends PropertyKey = PropertyKey, V = unknown>(
  generate: () => Iterable<readonly [K, V]>
): Record<K, V> {
  return Object.fromEntries(generate()) as Record<K, V>;
}
