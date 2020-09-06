import React from 'react'
import PropTypes from 'prop-types'

import { Div } from '../../../helpers/Element'
import Title from '../../../atoms/texts/Title'

export default function FormFilter({ options, title }) {
  return (
    <Div
      className="c-filter__form-item"
      spacing="half"
      gridItemSizeAtS={2}
      gridItemSizeAtL={1}
    >
      <Title
        as="h3"
        fontType="secondary"
        fontSize="s"
        text={title}
        strong
        themeColor="base"
        transform="upper"
      />
      {options.map(({ checked, id, name, type, value }, key) => {
        const inputId = `${type}-${id}`
        const inputType = type ? type : 'radio'
        return (
          <div className="c-filter__form-group" key={key}>
            <input
              defaultChecked={checked}
              id={inputId}
              name={inputType}
              type={inputType}
              value={value}
            />
            <label htmlFor={inputId}>{name}</label>
          </div>
        )
      })}
    </Div>
  )
}

FormFilter.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.oneOf(['radio', 'checkbox']),
      value: PropTypes.string,
    })
  ),
}
FormFilter.defaultProps = {
  options: [],
}
