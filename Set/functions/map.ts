export default function map<T, R>(
  this: Set<T>,
  mapper: (value: T) => R
): Set<R> {
  const result = new (<SetConstructor>this.constructor)[Symbol.species]<R>();
  for (const value of this) {
    result.add(mapper(value));
  }
  return result;
}
