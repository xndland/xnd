/// <reference types="./then.d.ts" />

const then = Symbol("xnd/then");

const proxyHandler = {
  apply(provide, thisArgument, argumentsList) {
    return new Proxy(function () {
      return provide().then((target) =>
        Reflect.apply(target, thisArgument, argumentsList)
      );
    }, proxyHandler);
  },
  construct(provide, argumentsList, _newTarget /* todo(mfulton26): handle? */) {
    return new Proxy(function () {
      return provide().then((target) =>
        Reflect.construct(target, argumentsList)
      );
    }, proxyHandler);
  },
  get(provide, propertyKey, receiver) {
    return ["then", "catch", "finally"].includes(propertyKey)
      ? Promise.prototype[propertyKey].bind(provide())
      : new Proxy(function () {
          return provide().then((target) => {
            const result =
              target instanceof Object
                ? Reflect.get(target, propertyKey, receiver)
                : target[propertyKey];
            return typeof result === "function" ? result.bind(target) : result;
          });
        }, proxyHandler);
  },
};

function provide() {
  return this;
}

Object.defineProperty(Promise.prototype, then, {
  value() {
    return new Proxy(provide.bind(this), proxyHandler);
  },
});

export default then;
