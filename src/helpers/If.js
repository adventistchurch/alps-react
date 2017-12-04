const If = ({ condition, children = undefined }) => {
  return condition && children ? children : null
}

export default If
