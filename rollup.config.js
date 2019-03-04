import { readdirSync } from 'fs'
import path from 'path'

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const EXTENSIONS = ['.js', '.json']
const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
]

const getChunks = URI =>
  readdirSync(path.resolve(URI))
    .filter(x => x.includes('.js') && !x.includes('.stories.js'))
    .reduce((a, c) => ({ ...a, [c.replace('.js', '')]: `src/${c}` }), {})

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return
  }
  console.error(warning)
}

const env = process.env.NODE_ENV

const commonPlugins = () => [
  external({
    includeDependencies: false,
  }),
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    extensions: EXTENSIONS,
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
  replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  resolve({
    extensions: EXTENSIONS,
    preferBuiltins: false,
  }),
  filesize(),
]

export default [
  {
    onwarn: discardWarning,
    input: 'src/index.js',
    output: {
      esModule: false,
      file: pkg.unpkg,
      format: 'umd',
      name: pkg.name,
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [...commonPlugins(), env === 'production' && terser()],
  },
  {
    onwarn: discardWarning,
    input: getChunks('src'),
    output: [
      {
        dir: 'build/esm',
        format: 'esm',
        sourcemap: true,
      },
      {
        dir: 'build/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: commonPlugins(),
  },
]
