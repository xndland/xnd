export default function* map<T, R>(
  this: Iterator<T>,
  mapper: (value: T) => R
): IterableIterator<R> {
  let { done, value } = this.next();
  while (!done) {
    yield mapper(value);
    ({ done, value } = this.next());
  }
}
