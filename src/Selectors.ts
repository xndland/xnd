import type Selector from "./Selector.ts";

type Selectors<T> = [Selector<T>, ...Selector<T>[]];

export default Selectors;
