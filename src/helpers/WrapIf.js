const WrapIf = ({ condition, wrap, wrapElse, children }) =>
  wrap && condition ? wrap(children) : wrapElse ? wrapElse(children) : children

export default WrapIf
