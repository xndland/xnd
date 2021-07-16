export default function getOrSet<T>(
  this: Array<T>,
  index: number,
  defaultValue: () => T
): T {
  if (index < 0) index += this.length;
  if (Reflect.has(this, index)) return this[index];
  const value = defaultValue();
  this[index] = value;
  return value;
}
