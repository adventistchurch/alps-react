export default (start, end) =>
  Array.from({ length: end - start + 1 }, () => start++)
