import { type SharedClass as Bar } from "my-lib-good/bar";
import { SharedClass as Foo } from "my-lib-good/foo";

const foo: Foo = new Foo();
const bar: Bar = foo;

console.log(bar, foo);
