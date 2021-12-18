import type Comparable from "./Comparable.d.ts";
import type ValuePick from "./ValuePick.d.ts";

export type FunctionSelector<T> = (value: T) => Comparable;

export type PropertyKeySelector<T> = keyof ValuePick<T, Comparable>;

type Selector<T> = FunctionSelector<T> | PropertyKeySelector<T>;

export default Selector;
