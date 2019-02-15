import React from 'react'
import PropTypes from 'prop-types'

import BasicPage from './BasicPage'

import BreakoutBlock from '../molecules/blocks/BreakoutBlock'
import PageHeader from '../organisms/sections/PageHeader'
import PageContent from '../organisms/content/PageContent'

const ChannelMain = ({
  background,
  breadcrumbs,
  kicker,
  title,
  content,
  breakout,
  aside,
  relatedPosts,
}) => {
  return (
    <BasicPage
      {...{
        background,
        breadcrumbs,
        kicker,
        title,
        content,
        breakout,
        aside,
        relatedPosts,
      }}
    />
  )
}

ChannelMain.propTypes = {
  title: PageHeader.propTypes.title,
  kicker: PageHeader.propTypes.kicker,
  background: PageHeader.propTypes.background,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  breadcrumbs: PageContent.propTypes.breadcrumbs,
  breakout: PropTypes.shape(BreakoutBlock.propTypes),
  aside: PropTypes.oneOfType([PropTypes.element]),
  relatedPosts: PropTypes.oneOfType([PropTypes.element]),
}
ChannelMain.defaultProps = {
  breadcrumbs: [],
}

export default ChannelMain
