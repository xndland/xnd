export default function takeUnless<T>(
  this: T,
  predicate: (value: T) => unknown
) {
  return predicate(this) ? undefined : this;
}
