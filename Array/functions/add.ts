export default function add<T>(this: Array<T>, value: T): Array<T> {
  this.push(value);
  return this;
}
