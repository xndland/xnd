export default function then<T>(this: Promise<T>): Then<T> {
  return new Proxy(Provide.bind(this), proxyHandler) as Then<T>;
}

export type Then<T> = {
  [P in keyof typeof Object.prototype]: Then<typeof Object.prototype[P]>;
} &
  Pick<Promise<T>, "then" | "catch" | "finally"> &
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
    : { [P in keyof T]: Then<T[P]> });

function Provide(this: unknown) {
  return this;
}

const proxyHandler: ProxyHandler<() => Promise<any>> = {
  apply(provide, thisArgument, argumentsList) {
    return new Proxy(
      Provide.bind(
        provide().then((target) =>
          Reflect.apply(target, thisArgument, argumentsList)
        )
      ),
      proxyHandler
    );
  },
  construct(provide, argumentsList) {
    return new Proxy(
      Provide.bind(
        provide().then((target) => Reflect.construct(target, argumentsList))
      ),
      proxyHandler
    );
  },
  get(provide, propertyKey, receiver) {
    switch (propertyKey) {
      case "then":
      case "catch":
      case "finally":
        return Reflect.get(Promise.prototype, propertyKey).bind(provide());
      default:
        return new Proxy(
          Provide.bind(
            provide().then((target) => {
              const result =
                target instanceof Object
                  ? Reflect.get(target, propertyKey, receiver)
                  : target[propertyKey];
              return typeof result === "function"
                ? result.bind(target)
                : result;
            })
          ),
          proxyHandler
        );
    }
  },
};
