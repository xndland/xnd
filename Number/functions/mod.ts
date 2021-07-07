export default function mod(this: number, other: number): number {
  return ((this % other) + other) % other;
}
