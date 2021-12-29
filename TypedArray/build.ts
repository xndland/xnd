import TypedArray from "../constructors/TypedArray.ts";

import key from "../symbols/build.ts";

declare global {
  interface TypedArrayConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(TypedArray, key, { value });

function value(
  this: Int8ArrayConstructor,
  generate: () => Iterable<number>
): Int8Array;
function value(
  this: Uint8ArrayConstructor,
  generate: () => Iterable<number>
): Uint8Array;
function value(
  this: Uint8ClampedArrayConstructor,
  generate: () => Iterable<number>
): Uint8ClampedArray;
function value(
  this: Int16ArrayConstructor,
  generate: () => Iterable<number>
): Int16Array;
function value(
  this: Uint16ArrayConstructor,
  generate: () => Iterable<number>
): Uint16Array;
function value(
  this: Int32ArrayConstructor,
  generate: () => Iterable<number>
): Int32Array;
function value(
  this: Uint32ArrayConstructor,
  generate: () => Iterable<number>
): Uint32Array;
function value(
  this: Float32ArrayConstructor,
  generate: () => Iterable<number>
): Float32Array;
function value(
  this: Float64ArrayConstructor,
  generate: () => Iterable<number>
): Float64Array;
function value(
  this: BigInt64ArrayConstructor,
  generate: () => Iterable<bigint>
): BigInt64Array;
function value(
  this: BigUint64ArrayConstructor,
  generate: () => Iterable<bigint>
): BigUint64Array;
function value<T>(
  this: TypedArrayConstructor,
  generate: () => Iterable<T>
): TypedArray<T> {
  return this.from(generate());
}

export default key;
