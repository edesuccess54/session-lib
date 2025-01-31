import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: false,
        plugins: [terser()],
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: false,
        plugins: [terser()],
      },
    ],

    plugins: [
      typescript({
        rootDir: './src',
        declaration: true,
        declarationMap: false,
        declarationDir: './dist',
        emitDeclarationOnly: true,
        tsconfig: './tsconfig.json',
      }),
      postcss({
        plugins: [autoprefixer(), cssnano({ preset: 'default' })],
        extract: 'candourIcons.css',
      }),
      svgr(),
      image(),
    ],
    external: [
      'react',
      'react-dom',
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [
      alias({
        entries: {
          "@src": path.resolve(__dirname, "./src")
        }
      }),
      resolve(), dts({ sourceMap: false })],
  },
];
