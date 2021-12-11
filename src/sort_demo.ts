import also from "./also.ts";
import compareTo from "./compareTo.ts";
import pipe from "./pipe.ts";
import sorted from "./sorted.ts";
import sortedBy from "./sortedBy.ts";
import sortedWith from "./sortedWith.ts";
import compareBy from "./comparisons/compareBy.ts";

// persons.groupBy((person) => person.age);
// _.groupBy(persons, (person) => person.age);

console.log("✅", [true, false].sort());
console.log("✅", [true, false][sorted]());

console.log("🚫", [20, 2, 10, 1].sort());
console.log("✅", [20, 2, 10, 1][sorted]());

console.log("🚫", [20n, 2n, 10n, 1n].sort());
console.log("✅", [20n, 2n, 10n, 1n][sorted]());

const dates = [
  new Date("2020-12-14T12:12:07"),
  new Date("2020-12-13T12:12:07"),
];
console.log("🚫", dates.slice().sort());
console.log("✅", dates[sorted]());

const strings = ["c", "a", "b", "aab", "aaa", "😂", "😀", "", "\uFF3A"];
console.log("✅", strings.slice().sort());
console.log("✅", strings[sorted]());

const id = Symbol("ID");
type Person = { [id]: number; name: string; age: number };
const persons: Person[] = [
  { [id]: 2, name: "Eve", age: 22 },
  { [id]: 0, name: "Bob", age: 22 },
  { [id]: 1, name: "Debbie", age: 21 },
  { [id]: 3, name: "Bob", age: 34 },
];
console.log(
  "💬",
  persons.slice().sort(({ age: a }, { age: b }) => a - b)
);
console.log(
  "🎸",
  persons[sortedBy]((person) => person.age)
);
console.log("✨", persons[sortedBy]("name"));

persons[sortedWith](compareBy<Person>("name").thenByDescending("age"))[also](
  console.log
);

persons[sortedBy](id)[pipe](console.log);

[
  null as unknown as Person,
  undefined as unknown as Person,
  ...persons,
  null as unknown as Person,
  undefined as unknown as Person,
  null as unknown as Person,
  undefined as unknown as Person,
  null as unknown as Person,
  Object.create(null),
]
  [sortedBy]("age")
  [also](console.log);

[
  undefined as unknown as string,
  "a",
  null as unknown as string,
  undefined as unknown as string,
  null as unknown as string,
  undefined as unknown as string,
]
  [sorted]()
  [also](console.log);

{
  const start = Date.now();
  for (let i = 0; i < 1e6; i++) {
    "adsfjadlfadskdasadndkaf;jdafdasfkjdasfadfjoiewjfoieqrn fjioa fqoiwrjf;kl;oiegreho;grejr;g ;gj rgjreg hro;ljrjg;oi r" <
      "adsfjadlfadskdasadndkaf;jdafdasfkjdasfadfjoiewjfoieqrn fjioa fqoiwrjf;kl;oiegreho;grejr;g ;gj rgjreg hro;ljrjg;oi r";
  }
  const end = Date.now();
  console.log(end - start);
}
{
  const start = Date.now();
  for (let i = 0; i < 1e6; i++) {
    "adsfjadlfadskdasadndkaf;jdafdasfkjdasfadfjoiewjfoieqrn fjioa fqoiwrjf;kl;oiegreho;grejr;g ;gj rgjreg hro;ljrjg;oi r"[
      compareTo
    ](
      "adsfjadlfadskdasadndkaf;jdafdasfkjdasfadfjoiewjfoieqrn fjioa fqoiwrjf;kl;oiegreho;grejr;g ;gj rgjreg hro;ljrjg;oi r"
    );
  }
  const end = Date.now();
  console.log(end - start);
}
