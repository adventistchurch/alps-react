import { readdirSync, statSync } from 'fs'

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import del from 'rollup-plugin-delete'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

// Sets some constants
const EXTENSIONS = ['.js', '.json']
const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
]

const excludePaths = [
  '.stories.js', // Storybook stories
  'atoms/icons/library', // Icons in library
  'helpers/renderTimes', // not used
]

function shouldIncludePath(path) {
  for (const excludePath of excludePaths) {
    if (path.includes(excludePath)) return false
  }

  return true
}

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
    .filter(path => path.includes('.js') && shouldIncludePath(path))
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

// Actual Rollup configuration
export default [
  // CJS and ESM
  {
    onwarn: discardWarning,
    input: getChunks('src'),
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [
      del({ targets: ['dist/cjs', 'dist/esm'] }),
      babel({
        babelrc: false,
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react',
        ],
        extensions: EXTENSIONS,
        exclude: 'node_modules/**',
        plugins: [
          ['transform-react-remove-prop-types', { removeImport: true }],
        ],
      }),
      commonjs({ include: /node_modules/ }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      resolve({
        extensions: EXTENSIONS,
        preferBuiltins: false,
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
    ],
    external: ['react', 'react-dom', 'prop-types'],
  },
]
