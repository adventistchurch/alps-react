import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from '../../helpers/Element'

export default function Figcaption({ caption, children }) {
  return (
    <figcaption className="o-figcaption">
      <Paragraph
        className="o-caption"
        color="gray"
        fontType="secondary"
        fontSize="s"
      >
        {caption || children}
      </Paragraph>
    </figcaption>
  )
}

Figcaption.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.string,
}
