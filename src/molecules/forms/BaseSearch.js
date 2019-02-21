import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import FilterGroup from './FilterGroup'
import Form from './Form'
import renderItems from '../../helpers/renderItems'
import useToggle from '../../helpers/useToggle'

function BaseSearch({
  border,
  className,
  contentWrapperClass,
  contentWrapperNestedClass,
  filters,
  placeholder,
  searchAgainLabel,
  searchLabel,
  showSearchAgain,
  sorting,
}) {
  const { onToggle, openClass } = useToggle(false, 'c-filter-is-active', '')

  const borderClass =
    border == 'left' ? 'u-theme--border-color--darker u-border--left' : ''

  return (
    <div
      className={`c-filter u-background-color--gray--light ${className} ${borderClass} ${openClass}`}
    >
      <Form className="c-filter__search" role="search">
        <div className={contentWrapperClass}>
          <div className={contentWrapperNestedClass}>
            <input
              type="search"
              name="s"
              className="u-font--secondary--s u-theme--color--darker u-color--gray o-input__search"
              placeholder={placeholder}
            />
          </div>
          <div className={contentWrapperNestedClass}>
            <div className="u-flex">
              <Button
                className="c-filter__button u-space--right"
                icon="search"
                text={searchLabel}
                outline={!showSearchAgain}
              />
              {(filters || sorting) && (
                <Button
                  as="span"
                  className={`c-filter__toggle ${openClass}`}
                  icon="settings"
                  onClick={onToggle}
                  simple
                />
              )}
            </div>
          </div>
        </div>
        {(filters || sorting) && (
          <div className={`c-filter__form u-padding--top`}>
            <div className={contentWrapperClass}>
              {filters && renderItems(filters, FilterGroup)}
              {sorting && renderItems([sorting], FilterGroup)}
              {showSearchAgain && (
                <div className="l-grid-item--7-col u-space--after-medium">
                  <Button
                    icon="search"
                    iconSize="xs"
                    text={searchAgainLabel}
                    outline
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}

BaseSearch.propTypes = {
  border: PropTypes.oneOf(['left']),
  className: PropTypes.string,
  contentWrapperClass: PropTypes.string,
  contentWrapperNestedClass: PropTypes.string,
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
  sorting: PropTypes.object,
}
BaseSearch.defaultProps = {
  className: '',
  filters: [],
  placeholder: 'Search...',
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
}

export default BaseSearch
