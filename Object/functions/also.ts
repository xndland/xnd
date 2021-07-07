export default function also<T>(this: T, fn: (value: T) => void): T {
  fn(this);
  return this;
}
