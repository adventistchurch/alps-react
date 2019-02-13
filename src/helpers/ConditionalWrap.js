const ConditionalWrap = ({ condition, wrap, wrapElse, children }) =>
  wrap && condition ? wrap(children) : wrapElse ? wrapElse(children) : children

export default ConditionalWrap
