import { readdirSync, statSync } from 'fs'

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

// Sets some constants
const env = process.env.NODE_ENV
const srcDir = 'src'

const EXTENSIONS = ['.js', '.json']
const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
]

/**
 * Returns files and subfolder as an array from a starting folder
 *
 * @param {String} dir Starting directory/folder
 */
const walkFolder = dir => {
  var results = []
  var list = readdirSync(dir)
  list.forEach(function(file) {
    file = `${dir}/${file}`

    var stat = statSync(file)

    if (stat && stat.isDirectory()) {
      // Recurse into a subdirectory
      results = results.concat(walkFolder(file))
    } else {
      // Is a file
      results.push(file)
    }
  })

  return results
}

/**
 * Returns an object with chunks information (name and source)
 *
 * Output example:
 * { 'atoms/buttons/Button': 'src/atoms/buttons/Button.js', ... }
 *
 * @param {String} URI Starting directory/folder
 */
const getChunks = URI =>
  walkFolder(URI)
    .filter(x => x.includes('.js') && !x.includes('.stories.js'))
    .reduce(
      (acc, current) => ({
        ...acc,
        [current.replace('.js', '').replace(`${URI}/`, '')]: `${current}`,
      }),
      {}
    )

/**
 * Discards some warnings (defined in CODES)
 *
 * @param {Object} warning
 */
const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return
  }
  console.error(warning) // eslint-disable-line no-console
}

// Setup common plugins
const commonPlugins = () => [
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
    customResolveOptions: {
      moduleDirectory: 'node_modules',
    },
  }),
]

// Actual Rollup configuration
export default [
  // UMD
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
    external: ['react', 'react-dom'],
  },
  // CJS and ESM
  {
    onwarn: discardWarning,
    input: getChunks(srcDir),
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
    external: ['react', 'react-dom', 'prop-types'],
  },
]
