import React from 'react'
import PropTypes from 'prop-types'

import Aside from '../organisms/asides/Aside'
import RelatedPosts from '../organisms/asides/RelatedPosts'
import BreakoutBlock from '../molecules/blocks/BreakoutBlock'
import PageHeader from '../organisms/sections/PageHeader'
import PageContent from '../organisms/content/PageContent'

const BasicPage = ({
  background,
  breadcrumbs,
  kicker,
  title,
  content,
  breakout,
  aside,
  relatedPosts,
}) => {
  const hasSidebar = breakout || aside || relatedPosts
  return (
    <>
      <main
        className="l-main u-spacing--double u-padding--double--bottom"
        role="main"
      >
        <PageHeader {...{ background, breadcrumbs, kicker, title }} />
        <section
          id="top"
          className={`l-main__content l-grid l-grid--7-col u-shift--left--1-col--at-${
            hasSidebar ? 'xxlarge' : 'large'
          } l-grid-wrap--6-of-7 u-spacing--double--until-xxlarge u-padding--zero--sides`}
        >
          <article
            className={`c-article l-grid-item l-grid-item--l--4-col ${
              hasSidebar ? 'l-grid-item--xl--3-col' : ''
            }`}
          >
            <div className="c-article__body">
              <PageContent breadcrumbs={breadcrumbs}>{content}</PageContent>
            </div>
          </article>
          {hasSidebar && (
            <div className="c-sidebar l-grid-item l-grid-item--l--2-col l-grid-item--xl--2-col u-spacing u-padding--zero--sides">
              {breakout && <BreakoutBlock {...breakout} />}
              {aside && <Aside {...aside} />}
              {relatedPosts && <RelatedPosts {...relatedPosts} />}
            </div>
          )}
        </section>
      </main>
    </>
  )
}

BasicPage.propTypes = {
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
BasicPage.defaultProps = {
  breadcrumbs: [],
}

export default BasicPage
