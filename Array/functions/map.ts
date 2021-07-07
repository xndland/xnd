export default function map<T, R>(
  this: Array<T>,
  mapper: (value: T) => R
): Array<R> {
  const { length } = this;
  const result = new (<ArrayConstructor>this.constructor)[Symbol.species](
    length
  );
  for (let index = 0; index < length; index++) {
    result[index] = mapper(this[index]);
  }
  return result;
}
