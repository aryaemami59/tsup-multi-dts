import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/foo.ts"],
    format: ["esm"],
    dts: true,
  },
  {
    entry: ["src/bar.ts"],
    format: ["esm"],
    dts: true,
  },
]);
