import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../../atoms/texts/Title'

function FormFilter({ options, title }) {
  return (
    <div className="c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col">
      <Title
        as="h3"
        className="u-color--gray can-be--lighter"
        color={null}
        strong
        text={title}
        transform="upper"
        type="secondary"
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
    </div>
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

export default FormFilter
