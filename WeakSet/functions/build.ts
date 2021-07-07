export default function build<T extends object>(
  generate: () => Iterable<T>
): WeakSet<T> {
  return new WeakSet(generate());
}
