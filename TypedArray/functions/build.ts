import "../../constructors/TypedArray.ts";

// todo: fix types in TypeScript's lib
declare global {
  interface BigInt64ArrayConstructor {
    from(arrayLike: Iterable<bigint>): BigInt64Array;
  }
  interface BigUint64ArrayConstructor {
    from(arrayLike: Iterable<bigint>): BigUint64Array;
  }
}

export default function build(
  this: Int8ArrayConstructor,
  generate: () => Iterable<number>
): Int8Array;
export default function build(
  this: Uint8ArrayConstructor,
  generate: () => Iterable<number>
): Uint8Array;
export default function build(
  this: Uint8ClampedArrayConstructor,
  generate: () => Iterable<number>
): Uint8ClampedArray;
export default function build(
  this: Int16ArrayConstructor,
  generate: () => Iterable<number>
): Int16Array;
export default function build(
  this: Uint16ArrayConstructor,
  generate: () => Iterable<number>
): Uint16Array;
export default function build(
  this: Int32ArrayConstructor,
  generate: () => Iterable<number>
): Int32Array;
export default function build(
  this: Uint32ArrayConstructor,
  generate: () => Iterable<number>
): Uint32Array;
export default function build(
  this: Float32ArrayConstructor,
  generate: () => Iterable<number>
): Float32Array;
export default function build(
  this: Float64ArrayConstructor,
  generate: () => Iterable<number>
): Float64Array;
export default function build(
  this: BigInt64ArrayConstructor,
  generate: () => Iterable<bigint>
): BigInt64Array;
export default function build(
  this: BigUint64ArrayConstructor,
  generate: () => Iterable<bigint>
): BigUint64Array;
export default function build<T>(
  this: TypedArrayConstructor,
  generate: () => Iterable<T>
): TypedArray<T> {
  return this.from(generate());
}
