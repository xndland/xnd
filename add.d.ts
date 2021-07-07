declare const add: unique symbol;

declare global {
  interface Number {
    [add](n: number): number;
  }
  interface BigInt {
    [add](n: bigint): bigint;
  }
}

export default add;
