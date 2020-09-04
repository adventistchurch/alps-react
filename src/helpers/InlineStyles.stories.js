import React from 'react'

import InlineStyles from './InlineStyles'

export default {
  title: 'ALPS/Helpers/InlineStyles',
  component: InlineStyles,
  args: {
    styles: '',
  },
}

const InlineStylesTemplate = props => {
  return (
    <div className="foo">
      <InlineStyles {...props} />
      <p className="bar">Inline Styles Helper</p>
    </div>
  )
}

export const Default = InlineStylesTemplate.bind({})
Default.args = {
  styles: `/*
* This is just an example to make the point. 
* Don't use custom colors and styles except is not possible to achieve it with ALPS!
*/
.foo {
  background-color: #444;
  padding: 1rem;
  text-align: center;
}
.bar {
  color: #ff0;
  font-weight: bold;
}`,
}
