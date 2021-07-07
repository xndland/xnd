export default function takeIf<T>(this: T, predicate: (value: T) => unknown) {
  return predicate(this) ? this : undefined;
}
