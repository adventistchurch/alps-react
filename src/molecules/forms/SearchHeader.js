import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'

const SearchHeader = ({ title, description, featured, className }) => {
  return (
    <div className="c-page-header__search u-background-color--gray--light can-be--dark-dark u-padding--double--top u-padding--double--bottom">
      <div className="l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium">
        <div className="l-grid-item l-grid-item--m--3-col">
          <input
            type="search"
            name="s"
            className="u-font--secondary--s u-theme--color--darker o-input__search"
            value="Search..."
          />
        </div>
        <div className="l-grid-item l-grid-item--m--3-col">
          <div className="u-flex">
            <button className="c-filter__button o-button u-space--right">
              <span className="u-icon u-icon--xs u-path-fill--white">
                <Icon name="search" />
              </span>
              Search
            </button>
            <span
              className="c-filter__toggle js-toggle o-button o-button--simple"
              data-toggled="c-filter"
              data-prefix="c-filter"
            >
              <span className="u-icon u-icon--xs">
                <Icon name="settings" />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="c-filter">
        <form className="c-filter__form u-padding--top">
          <div className="l-grid l-grid--7-col u-shift--left--1-col--at-large u-spacing--until-medium">
            <div className="c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col">
              <h3 className="u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter">
                Media
              </h3>
              {/* {% if search_filter.radio %}
            {% for item in search_filter.radio %}
              <div className="c-filter__form-group">
                <input id="radio-{{ item.id }}" type="radio" name="radio" value="{{ item.label }}" />
                <label for="radio-{{ item.id }}">{{ item.label }}</label>
              </div>
            {% endfor %}
          {% endif %} */}
            </div>
            <div className="c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col">
              <h3 className="u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter">
                Category
              </h3>
              {/* {% if search_filter.checkbox %}
            {% for item in search_filter.checkbox %}
              <div className="c-filter__form-group">
                <input id="checkbox-{{ item.id }}" type="checkbox" name="checkbox" value="{{ item.label }}" />
                <label for="checkbox-{{ item.id }}">{{ item.label }}</label>
              </div>
            {% endfor %}
          {% endif %} */}
            </div>
            <div className="c-filter__form-item u-spacing--half l-grid-item l-grid-item--s--2-col l-grid-item--l--1-col">
              <h3 className="u-font--secondary--s u-font-weight--bold u-text-transform--upper u-color--gray can-be--lighter">
                Category
              </h3>
              {/* {% if search_filter.radio %}
            {% for item in search_filter.radio %}
              <div className="c-filter__form-group">
                <input id="radio-{{ item.id }}" type="radio" name="radio" value="{{ item.label }}" />
                <label for="radio-{{ item.id }}">{{ item.label }}</label>
              </div>
            {% endfor %}
          {% endif %} */}
            </div>
            <div className="l-grid-item--7-col u-space--after-medium">
              <button className="o-button o-button--outline">
                <span className="u-icon u-icon--xs">
                  <Icon name="search" />
                </span>
                Search Again
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  featured: PropTypes.bool,
}

SearchHeader.defaultProps = {
  className: '',
  featured: false,
}

export default SearchHeader
