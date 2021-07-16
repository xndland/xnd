export default function set<T>(
  this: Array<T>,
  index: number,
  value: T
): Array<T> {
  this[index < 0 ? index + this.length : index] = value;
  return this;
}
