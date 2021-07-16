export default function get<K, V>(this: Map<K, V>, key: K): V | undefined {
  return this.get(key);
}
