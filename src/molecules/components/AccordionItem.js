import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

export default function AccordionItem({
  children,
  content,
  icon,
  heading,
  open,
}) {
  const { onToggle, openClass } = useToggle(open)

  return (
    <Div
      className={`c-accordion__item ${openClass}`}
      borderSide="left"
      paddingSide="left"
      paddingSize="half"
      spacingSize="half"
    >
      <Div
        className="c-accordion__heading"
        fontType="primary"
        fontSize="m"
        onClick={onToggle}
        themeColor="darker"
        allowSelect={false}
      >
        <IconWrap
          className="c-accordion__arrow"
          name="arrow-bracket-right"
          size="m"
          spaceSide="right"
          spaceSize="half"
          themePathFill="darker"
        />
        <strong>{heading}</strong>
        {icon && (
          <IconWrap
            name={icon}
            size="s"
            spaceSide="left"
            spaceSize="half"
            themePathFill="darker"
          />
        )}
      </Div>
      <Div
        className="c-accordion__content"
        paddingSide="left"
        paddingSize="half"
      >
        {content || children}
      </Div>
    </Div>
  )
}

AccordionItem.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  heading: PropTypes.node.isRequired,
  icon: PropTypes.string,
  open: PropTypes.bool,
}
