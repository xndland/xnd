import "../../constructors/TypedArray.ts";

export default function map<T>(
  this: TypedArray<T>,
  mapper: (value: T) => T
): TypedArray<T> {
  const { length } = this;
  const result: TypedArray<T> = new (this.constructor as any)[Symbol.species](
    length
  );
  for (let index = 0; index < length; index++) {
    result[index] = mapper(this[index]);
  }
  return result;
}
