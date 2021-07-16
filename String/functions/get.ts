export default function get(this: string, index: number): string | undefined {
  return this[index < 0 ? index + this.length : index];
}
