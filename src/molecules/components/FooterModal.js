import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import useToggle from '../../helpers/useToggle'
import Text from '../../atoms/texts/Text'
import { Paragraph } from '../../helpers/Element'

/**
 * Footer Modal component
 */
export default function FooterModal({ children, text }) {
  const { onToggle, openClass } = useToggle(true, '', 'this-is-active')

  return (
    <Text
      className={`c-modal ${openClass}`}
      themeBackgroundTrans="base"
      color="white"
      padding
    >
      <Paragraph className="c-modal__body" fontType="primary" strong>
        {children || text}
      </Paragraph>

      <IconWrap
        as="button"
        className="c-modal__close"
        color="white"
        fill="white"
        name="close"
        onClick={onToggle}
        size="m"
      />
    </Text>
  )
}

FooterModal.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}
