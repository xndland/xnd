import key from "../symbols/build.ts";

declare global {
  interface StringConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(String, key, { value });

function value(steps: () => Iterable<unknown>): string {
  let result = "";
  for (const step of steps()) result += step;
  return result;
}

export default key;
