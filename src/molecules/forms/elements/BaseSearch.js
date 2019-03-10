import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/buttons/Button'
import FilterGroup from './FilterGroup'
import Form from './Form'
import Element, { Div } from '../../../helpers/Element'
import renderItems from '../../../helpers/renderItems'
import useToggle from '../../../helpers/useToggle'

function BaseSearch({
  contentProps,
  nestedProps,
  filters,
  placeholder,
  searchAgainLabel,
  searchLabel,
  showSearchAgain,
  sorting,
  ...props
}) {
  const { onToggle, openClass } = useToggle(false, 'c-filter-is-active', '')

  return (
    <Div
      className={`c-filter ${openClass}`}
      backgroundColor="gray--light"
      {...props}
    >
      <Form className="c-filter__search" role="search">
        <Div {...contentProps}>
          <Div {...nestedProps}>
            <Element
              as="input"
              className="o-input__search"
              color="gray"
              fontType="secondary"
              fontSize="s"
              name="s"
              placeholder={placeholder}
              themeColor="darker"
              type="search"
            />
          </Div>
          <Div {...nestedProps}>
            <Div flex>
              <Button
                className="c-filter__button"
                icon="search"
                text={searchLabel}
                outline={!showSearchAgain}
                spaceSide="right"
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
            </Div>
          </Div>
        </Div>
        {(filters || sorting) && (
          <Div className="c-filter__form" paddingSide="top">
            <Div {...contentProps}>
              {filters && renderItems(filters, FilterGroup)}
              {sorting && renderItems([sorting], FilterGroup)}
              {showSearchAgain && (
                <Div noGridItemClass gridItemSize="7" spaceAfter="medium">
                  <Button
                    icon="search"
                    iconSize="xs"
                    text={searchAgainLabel}
                    outline
                  />
                </Div>
              )}
            </Div>
          </Div>
        )}
      </Form>
    </Div>
  )
}

BaseSearch.propTypes = {
  filters: PropTypes.array,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
  sorting: PropTypes.object,
  ...Div.propTypes,
}
BaseSearch.defaultProps = {
  filters: [],
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
}

export default BaseSearch
