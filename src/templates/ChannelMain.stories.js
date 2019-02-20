import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import ChannelMain from './ChannelMain'

import breakoutData from '../molecules/blocks/BreakoutBlock.stories.json'
import asideData from '../organisms/asides/Aside.stories.json'
import relatedPostsData from '../organisms/asides/RelatedPosts.stories.json'
import data from './ChannelMain.stories.json'

const headerTab = 'Header'
const contentTab = 'Content'
const sidebarTab = 'Sidebar'

storiesOf('templates/ChannelMain', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title', data.title, headerTab)
    const kicker = text('Kicker', data.kicker, headerTab)
    const background = object('Background', data.background, headerTab)
    const breadcrumbs = object('Breadcrumbs', data.breadcrumbs, headerTab)

    const contentTitle = text('Content Title', data.content.title, contentTab)
    const contentText = text('Content Text', data.content.text, contentTab)

    const breakout = object('Breakout', breakoutData, sidebarTab)
    const aside = object('Aside', asideData, sidebarTab)
    const relatedPosts = object('Related Posts', relatedPostsData, sidebarTab)

    const content = (
      <>
        <h2>{contentTitle}</h2>
        <p>{contentText}</p>
      </>
    )

    return (
      <div className="l-wrap">
        <div className="l-wrap__content l-content" role="document">
          <ChannelMain
            aside={aside}
            background={background}
            breadcrumbs={breadcrumbs}
            breakout={breakout}
            content={content}
            kicker={kicker}
            relatedPosts={relatedPosts}
            title={title}
          />
        </div>
      </div>
    )
  })
