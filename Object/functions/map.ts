export default function mapObject<
  K extends PropertyKey,
  V,
  KResult extends PropertyKey,
  VResult
>(
  this: Record<K, V>,
  mapper: (entry: [K, V]) => readonly [KResult, VResult]
): Record<KResult, VResult> {
  const result = <Record<KResult, VResult>>{};
  for (const key in this) {
    const [keyResult, valueResult] = mapper([key, this[key]]);
    result[keyResult] = valueResult;
  }
  return result;
}
