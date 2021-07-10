export default function also<T>(this: T, fn: (this: T) => void): T {
  fn.apply(this);
  return this;
}
