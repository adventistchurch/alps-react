import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/buttons/Button'
import Element, { Div } from '../../../helpers/Element'
import renderItems from '../../../helpers/renderItems'
import useToggle from '../../../helpers/useToggle'
import Suggestions from '../../components/Suggestions'
import FilterGroup from './FilterGroup'
import Form from './Form'

const styles = {
  inputWrap: { position: 'relative' },
}

function BaseSearch({
  contentProps,
  nestedProps,
  filters,
  placeholder,
  onSearch,
  onSubmit,
  searchAgainLabel,
  searchLabel,
  showSearchAgain,
  sorting,
  suggestions,
  term,
  ...props
}) {
  const { onToggle, openClass } = useToggle(false, 'c-filter-is-active', '')

  return (
    <Div
      className={`c-filter ${openClass}`}
      backgroundColor="gray--light"
      {...props}
    >
      <Form className="c-filter__search" role="search" onSubmit={onSubmit}>
        <Div {...contentProps}>
          <Div {...nestedProps}>
            <div style={styles.inputWrap}>
              <Element
                as="input"
                className="o-input__search"
                color="gray"
                fontType="secondary"
                fontSize="s"
                onChange={onSearch}
                placeholder={placeholder}
                themeColor="darker"
                autoComplete="off"
                type="search"
                value={term}
              />
              {suggestions && <Suggestions items={suggestions} />}
            </div>
          </Div>
          <Div {...nestedProps}>
            <Div flex>
              <Button
                className="c-filter__button"
                icon="search"
                text={searchLabel}
                outline={!showSearchAgain}
                spaceRight
                type="submit"
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
          <Div className="c-filter__form" paddingTop>
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
  onSearch: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  searchAgainLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  showSearchAgain: PropTypes.bool,
  sorting: PropTypes.object,
  suggestions: PropTypes.array,
  ...Div.propTypes,
}
BaseSearch.defaultProps = {
  searchAgainLabel: 'Search Again',
  searchLabel: 'Search',
}

export default BaseSearch
