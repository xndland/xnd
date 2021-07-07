export default function add<T>(this: Set<T>, value: T): Set<T> {
  return this.add(value);
}
