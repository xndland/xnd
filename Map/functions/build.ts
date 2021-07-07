export default function build<K, V>(
  generate: () => Iterable<readonly [K, V]>
): Map<K, V> {
  return new Map(generate());
}
