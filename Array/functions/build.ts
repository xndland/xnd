export default function build<T>(generate: () => Iterable<T>): Array<T> {
  return Array.from(generate());
}
