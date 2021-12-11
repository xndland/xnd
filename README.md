# xnd

Safely extending and complementing JavaScript built-ins since 2021. See [Usage](docs/usage.md) for import details.

Inspired by the [Kotlin Standard Library](https://kotlinlang.org/api/latest/jvm/stdlib/#kotlin-standard-library).

## Scope

- [`@@also`](docs/@@also.md) — call some function on a value and then return the same value.
- [`@@pipe`](docs/@@pipe.md) — call some function on a value and then return its return value.

### Ordering

- [`@@compareTo`](docs/@@compareTo.md) — compares a value to another value for order (returns zero for same, negative for before, and positive for after).
- [`@@sort`](docs/@@sort.md) — sorts an array in-place using natural order of its elements and returns the sorted array.
- [`@@sortBy`](docs/@@sortBy.md) — sorts an array in-place using natural order of the values selected and returns the sorted array.
- [`@@sortByDescending`](docs/@@sortByDescending.md) — sorts an array in-place using reverse order of the values selected and returns the sorted array.
- [`@@sortDescending`](docs/@@sortDescending.md) — sorts an array in-place using reverse order of its elements and returns the sorted array.
- [`@@sorted`](docs/@@sorted.md) — returns a copy of an array sorted using natural order of its elements.
- [`@@sortedBy`](docs/@@sortedBy.md) — returns a copy of an array sorted using natural order of the values selected.
- [`@@sortedByDescending`](docs/@@sortedByDescending.md) — returns a copy of an array sorted using reverse order of the values selected.
- [`@@sortedDescending`](docs/@@sortedDescending.md) — returns a copy of an array sorted using reverse order of its elements.
- [`@@sortedWith`](docs/@@sortedWith.md) — returns a copy of an array sorted using the specified compare function.
- [`@@sortWith`](docs/@@sortWith.md) — sorts an array in-place using the specified compare function.
- [`compareBy`](docs/comparisons/compareBy.md) — returns a `CompareFunction` using the specified selectors.
- [`compareByDescending`](docs/comparisons/compareByDescending.md) — returns a reversed `CompareFunction` using the specified selectors.
- [`CompareFunction`](docs/CompareFunction.md) — provides a fluent comparison API for building complex compare functions.
- [`compareValues`](docs/comparisons/compareValues.md) — compares two `Comparable` values.
- [`compareValuesBy`](docs/comparisons/compareValuesBy.md) — compares two values by the values selected.
- [`maxOf`](docs/comparisons/maxOf.md) — returns the greatest of the specified values.
- [`minOf`](docs/comparisons/minOf.md) — returns the least of the specified values.
- [`naturalOrder`](docs/comparisons/naturalOrder.md) — returns a `CompareFunction` that compares values using natural ordering.
- [`reverseOrder`](docs/comparisons/reverseOrder.md) — returns a `CompareFunction` that compares values using reversed natural ordering.
