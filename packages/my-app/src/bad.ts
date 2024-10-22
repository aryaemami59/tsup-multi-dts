import {
  type SharedClass as Bar,
  sharedSymbol as barSymbol,
} from "my-lib-bad/bar";
import {
  SharedClass as Foo,
  type sharedSymbol as fooSymbol,
} from "my-lib-bad/foo";

const checkSymbol: typeof fooSymbol = barSymbol;
console.log(checkSymbol);
const foo: Foo = new Foo();
const bar: Bar = foo;

console.log(bar, foo);
