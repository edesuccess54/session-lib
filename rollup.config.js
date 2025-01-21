import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: false,
        plugins: [terser()],
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    external: ["react", "react-dom"],

    plugins: [
      typescript({
        rootDir: "./src",
        declaration: true,
        declarationMap: false,
        declarationDir: "./dist",
        emitDeclarationOnly: true,
        tsconfig: "./tsconfig.json",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [resolve(), dts({ sourceMap: false })],
  },
];
