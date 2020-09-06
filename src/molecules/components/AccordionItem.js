import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

export default function AccordionItem({
  children,
  content,
  icon,
  heading,
  open: initialOpen,
  onChange,
}) {
  const { onToggle, openClass, open } = useToggle(initialOpen)

  const _onToggle = useCallback(() => {
    if (onChange) onChange(!open)

    onToggle()
  }, [onChange, onToggle, open])

  return (
    <Div
      className={`c-accordion__item ${openClass}`}
      borderSide="left"
      paddingLeft="half"
      spacing="half"
    >
      <Div
        className="c-accordion__heading"
        fontType="primary"
        fontSize="m"
        onClick={_onToggle}
        themeColor="darker"
        allowSelect={false}
      >
        <IconWrap
          className="c-accordion__arrow"
          name="arrow-bracket-right"
          size="m"
          spaceRight="half"
          themePathFill="darker"
        />
        <strong>{heading}</strong>
        {icon && (
          <IconWrap
            name={icon}
            size="s"
            spaceLeft="half"
            themePathFill="darker"
          />
        )}
      </Div>
      <Div className="c-accordion__content" paddingLeft="half">
        {content || children}
      </Div>
    </Div>
  )
}

AccordionItem.propTypes = {
  /**
   * Provide content as nested children nodes
   */
  children: PropTypes.node,
  /**
   * Provide content as nodes or string
   */
  content: PropTypes.node,
  /**
   * Sets item's heading text
   */
  heading: PropTypes.node.isRequired,
  /**
   * Sets item's icon
   */
  icon: PropTypes.string,
  /**
   * Provide a callback that gets triggered when item is toggled (`(open) => void`)
   */
  onChange: PropTypes.func,
  /**
   * Sets item's open state
   */
  open: PropTypes.bool,
}
