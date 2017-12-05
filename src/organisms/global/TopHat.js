import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'

const TopHat = ({ text, url, learnMore }) => (
  <div className="header__top-hat show-at--large bg--black pad-half align--right">
    <span className="icon icon__logo">
      <a href={url}>
        <Icon name="logo" color="fill--white" />
      </a>
    </span>
    <p className="font--secondary--xs gray--med">
      {text}&nbsp;
      <a className="link--white" href={learnMore.url}>
        {learnMore.text}
      </a>.
    </p>
  </div>
)

TopHat.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  learnMore: PropTypes.object,
}
TopHat.defaultProps = {
  text: 'This is an official website of the Seventh-day Adventist Church.',
  url: 'http://www.adventist.org',
  learnMore: {
    text: 'Learn More about Adventists',
    url: 'http://www.adventist.org/beliefs',
  },
}

export default TopHat
