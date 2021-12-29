/**
 * From T, pick a set of properties whose values are in the union V
 */
type ValuePick<T, V> = Pick<
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

export default ValuePick;
