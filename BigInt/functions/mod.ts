export default function mod(this: bigint, other: bigint): bigint {
  return ((this % other) + other) % other;
}
