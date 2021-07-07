export default function build<T>(generate: () => Iterable<T>): Set<T> {
  return new Set(generate());
}
