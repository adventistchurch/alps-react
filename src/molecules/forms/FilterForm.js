import React from 'react'
import PropTypes from 'prop-types'

function FilterFormItem({ label, options, type }) {
  return (
    <div className="c-filter__form-item u-spacing--half">
      <h3 className="u-font--secondary--s u-font-weight--bold u-text-transform--upper u-theme--color--base">
        {label}
      </h3>

      {options.map((item, i) => {
        const key = `item-${item.id || i}`
        return (
          <div className="c-filter__form-group" key={key}>
            <input id={key} type={type} name={type} value={item.label} />
            <label htmlFor={key}>{item.label}</label>
          </div>
        )
      })}
    </div>
  )
}
FilterFormItem.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.oneOf(['checkbox', 'radio']),
}

export default function FilterForm({
  active,
  filterLabel,
  filterOptions,
  sortLabel,
  sortOptions,
}) {
  return (
    <form
      className={`c-filter__form u-spacing ${active ? 'this-is-active' : ''}`}
    >
      <FilterFormItem
        label={filterLabel}
        options={filterOptions}
        type="checkbox"
      />
      <FilterFormItem label={sortLabel} options={sortOptions} type="radio" />
    </form>
  )
}
FilterForm.propTypes = {
  active: PropTypes.bool,
  filterLabel: PropTypes.string,
  filterOptions: PropTypes.array,
  sortLabel: PropTypes.string,
  sortOptions: PropTypes.array,
}
FilterForm.defaultProps = {
  active: true,
  filterLabel: 'Filter',
  filterOptions: [],
  sortLabel: 'Sort By',
  sortOptions: [],
}
