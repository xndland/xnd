const Iterator = Object.getPrototypeOf(
  Object.getPrototypeOf(
    Object.getPrototypeOf((function* () {})()[Symbol.iterator]())
  )
);

export default Iterator;
