import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'

const FilterItem = ({ text, value }) => <option value={value}>{text}</option>

FilterItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const FacetFilter = ({ action, method, facets, title }) => {
  return (
    <form
      action={action}
      method={method}
      className="c-facet-filter-form toggled-element"
    >
      <fieldset className="u-spacing--half">
        <legend className="u-font--secondary--m u-theme--color--darker">
          {title}
        </legend>
        <div className="u-spacing">
          {facets.map(({ name, defaultValue, options }, key) => {
            return (
              <select
                name={`select--${name}`}
                id={`select--${name}`}
                key={key}
                defaultValue={defaultValue}
              >
                {renderItems(options, FilterItem)}
              </select>
            )
          })}
          <button className="search-form__submit is-vishidden">
            <span className="is-vishidden">Filter</span>
          </button>
        </div>
      </fieldset>
    </form>
  )
}

FacetFilter.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  facets: PropTypes.array,
  title: PropTypes.string,
}

FacetFilter.defaultProps = {
  method: 'post',
  facets: [],
}

export default FacetFilter
