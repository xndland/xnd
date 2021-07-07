export default async function* map<T, R>(
  this: AsyncIterator<T>,
  mapper: (value: T) => R
): AsyncIterableIterator<R> {
  let { done, value } = await this.next();
  while (!done) {
    yield mapper(value);
    ({ done, value } = await this.next());
  }
}
