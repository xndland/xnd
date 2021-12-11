import type Comparable from "./Comparable.ts";
import type ValuePick from "./ValuePick.ts";

export type FunctionSelector<T> = (value: T) => Comparable;

export type PropertyKeySelector<T> = keyof ValuePick<T, Comparable>;

type Selector<T> = FunctionSelector<T> | PropertyKeySelector<T>;

type X = PropertyKeySelector<unknown>;

export default Selector;
