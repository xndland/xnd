const AsyncIterator = Object.getPrototypeOf(
  Object.getPrototypeOf(
    Object.getPrototypeOf((async function* () {})()[Symbol.asyncIterator]())
  )
);

export default AsyncIterator;
