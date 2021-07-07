/** @experimental */
declare const then: unique symbol;

export type Then<T> = {
  [P in keyof typeof Object.prototype]: Then<typeof Object.prototype[P]>;
} &
  (T extends { new (...args: any): any }
    ? T extends { (...args: any): any }
      ? {
          new (...args: ConstructorParameters<T>): Then<InstanceType<T>>;
          (...args: Parameters<T>): Then<ReturnType<T>>;
        }
      : { new (...args: ConstructorParameters<T>): Then<InstanceType<T>> }
    : T extends { (...args: any): any }
    ? { (...args: Parameters<T>): Then<ReturnType<T>> }
    : T extends string
    ? { [P in keyof string]: Then<string[P]> }
    : T extends number
    ? { [P in keyof number]: Then<number[P]> }
    : T extends bigint
    ? { [P in keyof bigint]: Then<bigint[P]> }
    : T extends boolean
    ? { [P in keyof boolean]: Then<boolean[P]> }
    : T extends symbol
    ? { [P in keyof symbol]: Then<symbol[P]> }
    : { [P in keyof T]: Then<T[P]> }) &
  Promise<T>;

declare global {
  interface Promise<T> {
    [then](): Then<T>;
  }
}

export default then;
