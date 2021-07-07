export default function build(steps: () => Iterable<unknown>): string {
  return Array.from(steps()).join("");
}
