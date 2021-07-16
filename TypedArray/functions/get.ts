import "../../constructors/TypedArray.ts";

export default function get<T>(this: TypedArray<T>, index: number): T {
  return this[index < 0 ? index + this.length : index];
}
