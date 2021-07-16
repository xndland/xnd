import "../../constructors/TypedArray.ts";

export default function set<T>(
  this: TypedArray<T>,
  index: number,
  value: T
): TypedArray<T> {
  this[index < 0 ? index + this.length : index] = value;
  return this;
}
