/**
 * Generates a "unique", 9-character string
 * Adapted from https://gist.github.com/gordonbrander/2230317
 *
 * @param {string} prefix (optional)
 */
export function uuid(prefix = '') {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
  return (
    prefix +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

/**
 * React hook version
 * @param {string} prefix
 */
export default function useUUID(prefix) {
  return uuid(prefix)
}
