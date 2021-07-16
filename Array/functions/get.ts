export default function get<T>(this: Array<T>, index: number): T | undefined {
  return this[index < 0 ? index + this.length : index];
}
