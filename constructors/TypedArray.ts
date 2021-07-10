declare global {
  interface TypedArray<T> {
    readonly length: number;
    [index: number]: T;
  }

  interface Int8Array extends TypedArray<number> {}
  interface Uint8Array extends TypedArray<number> {}
  interface Uint8ClampedArray extends TypedArray<number> {}
  interface Int16Array extends TypedArray<number> {}
  interface Uint16Array extends TypedArray<number> {}
  interface Int32Array extends TypedArray<number> {}
  interface Uint32Array extends TypedArray<number> {}
  interface BigInt64Array extends TypedArray<bigint> {}
  interface BigUint64Array extends TypedArray<bigint> {}
  interface Float32Array extends TypedArray<number> {}
  interface Float64Array extends TypedArray<number> {}
}

export default Object.getPrototypeOf(Int8Array);
