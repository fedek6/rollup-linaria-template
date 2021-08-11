
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import linaria from "@linaria/rollup";
import css from "rollup-plugin-css-only";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
	plugins: [
    peerDepsExternal(),
    commonjs(),
    linaria({
      exclude: ["node_modules/**"],
      evaluate: true,
      displayName: true,
      classNameSlug: (hash, title) => `${packageJson.name}__${hash}__${title}`
    }),
    css({ output: "css/bundle.css" }),
		typescript({ useTsconfigDeclarationDir: true, tsconfig: "./tsconfig.json" })
	]
}
