export default function map<K, V, KResult, VResult>(
  this: Map<K, V>,
  mapper: (entry: [K, V]) => readonly [KResult, VResult]
): Map<KResult, VResult> {
  const result = new (<MapConstructor>this.constructor)[Symbol.species]<
    KResult,
    VResult
  >();
  for (const value of this) {
    result.set(...mapper(value));
  }
  return result;
}
