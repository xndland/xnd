declare global {
  interface TypedArray<T> {
    readonly length: number;
    [index: number]: T;
  }
  interface TypedArrayConstructor {
    readonly prototype: TypedArray<unknown>;
    readonly BYTES_PER_ELEMENT: number;
    from<T>(arrayLike: Iterable<T>): TypedArray<T>;
  }

  interface Int8Array extends TypedArray<number> {}
  interface Uint8Array extends TypedArray<number> {}
  interface Uint8ClampedArray extends TypedArray<number> {}
  interface Int16Array extends TypedArray<number> {}
  interface Uint16Array extends TypedArray<number> {}
  interface Int32Array extends TypedArray<number> {}
  interface Uint32Array extends TypedArray<number> {}
  interface Float32Array extends TypedArray<number> {}
  interface Float64Array extends TypedArray<number> {}
  interface BigInt64Array extends TypedArray<bigint> {}
  interface BigUint64Array extends TypedArray<bigint> {}

  interface Int8ArrayConstructor extends TypedArrayConstructor {}
  interface Uint8ArrayConstructor extends TypedArrayConstructor {}
  interface Uint8ClampedArrayConstructor extends TypedArrayConstructor {}
  interface Int16ArrayConstructor extends TypedArrayConstructor {}
  interface Uint16ArrayConstructor extends TypedArrayConstructor {}
  interface Int32ArrayConstructor extends TypedArrayConstructor {}
  interface Uint32ArrayConstructor extends TypedArrayConstructor {}
  interface Float32ArrayConstructor extends TypedArrayConstructor {}
  interface Float64ArrayConstructor extends TypedArrayConstructor {}
  interface BigInt64ArrayConstructor extends TypedArrayConstructor {
    from(arrayLike: Iterable<bigint>): BigInt64Array;
  }
  interface BigUint64ArrayConstructor extends TypedArrayConstructor {
    from(arrayLike: Iterable<bigint>): BigUint64Array;
  }
}

export default Object.getPrototypeOf(Int8Array) as TypedArrayConstructor;
