import { defineConfig } from "tsup";

export default defineConfig({
  entry: [  "src/foo.ts", "src/bar.ts"],
  format: ["esm"],
  experimentalDts: true,
});
