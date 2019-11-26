import React from 'react'
import { storiesOf } from '@storybook/react'
import { } from '@storybook/addon-knobs'

import ChannelMain from './ChannelMain'

import {
  pageHeaderTab,
  pageBreadcrumbsTab,
  mainContentTab,
  sidebarTab,
  globalTab,
} from './BasicPage.stories'

storiesOf('templates/ChannelMain', module)
  

  .addWithJSX('Default', () => {
    const pageHeader = pageHeaderTab({ kicker: 'Kicker' })
    const { breadcrumbs } = pageBreadcrumbsTab()
    const { title1, title2, title3, text1, text2, text3 } = mainContentTab()
    const { showSidebar, breakout, aside } = sidebarTab()
    const templateProps = globalTab()

    const content = (
      <>
        <h2>{title1}</h2>
        <p>{text1}</p>

        <h3>{title2}</h3>
        <p>{text2}</p>

        <h4>{title3}</h4>
        <p>{text3}</p>
      </>
    )

    return (
      <ChannelMain
        aside={showSidebar ? aside : null}
        breadcrumbs={breadcrumbs}
        breakout={breakout}
        content={content}
        pageHeader={pageHeader}
        // relatedPosts={relatedPosts}
        {...templateProps}
      />
    )
  })
