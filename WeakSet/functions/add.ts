export default function add<T extends object>(
  this: WeakSet<T>,
  value: T
): WeakSet<T> {
  return this.add(value);
}
