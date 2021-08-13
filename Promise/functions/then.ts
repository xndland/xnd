export default function then<T>(this: Promise<T>): Then<T> {
  return new Proxy(Provide.bind(this), proxyHandler) as Then<T>;
}

export type Then<T> = {
  [P in keyof typeof Object.prototype]: Then<typeof Object.prototype[P]>;
} &
  Pick<Promisify<T>, "then" | "catch" | "finally"> &
  (T extends {
    new (...args: infer TConstructorParameters): infer TInstance;
  }
    ? T extends { (...args: infer TFunctionParameters): infer TReturn }
      ? {
          new (...args: TConstructorParameters): Then<TInstance>;
          (...args: TFunctionParameters): Then<TReturn>;
        }
      : { new (...args: TConstructorParameters): Then<TInstance> }
    : T extends { (...args: infer TFunctionParameters): infer TReturn }
    ? { (...args: TFunctionParameters): Then<TReturn> }
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
  { [P in keyof T]: Then<T[P]> };

type Promisify<T> = T extends Promise<infer U>
  ? Promise<Unpromisify<U>>
  : Promise<T>;
type Unpromisify<T> = T extends Promise<infer U> ? Unpromisify<U> : T;

function Provide(this: unknown) {
  return this;
}

const proxyHandler: ProxyHandler<() => Promise<unknown>> = {
  apply(provide, thisArgument, argumentsList) {
    return new Proxy(
      Provide.bind(
        provide().then((target) =>
          Reflect.apply(
            target as (...args: unknown[]) => unknown,
            thisArgument,
            argumentsList
          )
        )
      ),
      proxyHandler
    );
  },
  construct(provide, argumentsList) {
    return new Proxy(
      Provide.bind(
        provide().then((target) =>
          Reflect.construct(
            target as new (...args: unknown[]) => unknown,
            argumentsList
          )
        )
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
                  : // @ts-expect-error 'symbol' is supported here
                    (<Record<string | symbol, unknown>>target)[propertyKey];
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
