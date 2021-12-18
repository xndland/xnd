import type Selector from "./Selector.d.ts";

type Selectors<T> = [Selector<T>, ...Selector<T>[]];

export default Selectors;
