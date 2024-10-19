import { type SharedClass as Bar } from "my-lib-bad/bar";
import { SharedClass as Foo } from "my-lib-bad/foo";

const foo: Foo = new Foo();
const bar: Bar = foo;

console.log(bar, foo);
