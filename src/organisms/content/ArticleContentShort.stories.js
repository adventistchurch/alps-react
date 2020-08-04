import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'

import { spacingSizes } from '../../atoms/global/spacing'
import { Link, Paragraph } from '../../helpers/Element'
import ArticleContentShort from './ArticleContentShort'

import RelatedPosts from '../asides/RelatedPosts'
import relatedPosts from '../asides/RelatedPosts.stories.json'

const demoContent = [
  <Paragraph key="p-1">
    <strong>Lorem</strong> ipsum dolor sit amet, consectetur adipiscing elit.{' '}
    <Link href="https://adventist.org">Donec malesuada</Link>, est ut viverra
    euismod, dui dolor gravida massa, sed aliquam ex nisl ut metus. Mauris at
    ante laoreet, gravida odio gravida, fermentum lectus. Fusce ac sollicitudin
    purus. Morbi et diam nunc. Praesent fringilla magna nisl, et volutpat nisi
    tincidunt aliquet. In laoreet ligula vel porttitor condimentum. In mattis
    ultricies placerat. Morbi interdum hendrerit tempus. Donec consequat elit
    vitae justo ornare, eget elementum quam consequat. Quisque auctor ex et
    congue finibus. Proin sed nisl ac velit aliquam euismod non tincidunt
    lectus. In enim ex, commodo feugiat porttitor sed, eleifend vitae ipsum.
    Suspendisse lorem nisl, suscipit at tellus quis, porttitor convallis sem.
  </Paragraph>,
  <Paragraph key="p-2">
    <Link href="https://adventist.org">
      Vestibulum ipsum orci, egestas eu erat non, posuere maximus quam.
    </Link>{' '}
    Quisque tincidunt turpis id accumsan hendrerit. Cras eleifend, arcu sit amet
    faucibus blandit, dolor urna euismod sem, non molestie nulla nulla porta
    nibh. Integer commodo arcu vitae nisl iaculis, non hendrerit arcu sodales.
    Vivamus sagittis quam ut elit posuere ultrices. In blandit erat orci, vitae
    posuere enim vehicula quis. Nullam posuere mauris odio, eu facilisis lorem
    iaculis ut. Aenean tortor turpis, sollicitudin ut est eget, mattis feugiat
    arcu. Etiam est magna, aliquet ut blandit sit amet, malesuada a lacus. Nam
    scelerisque arcu non sem auctor molestie. Vestibulum sit amet congue ex.
  </Paragraph>,
]

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...ArticleContentShort.defaultProps,
    ...settings,
  }
}

export function generalTab(settings = {}) {
  const { spacing, hasDropcap, tab } = getTabData('General', settings)

  return {
    hasDropcap: boolean('Has dropcap', hasDropcap, tab),
    spacing: select('Spacing', spacingSizes, spacing, tab),
  }
}

storiesOf('organisms/content/ArticleContentShort', module)
  .addWithJSX('Default', () => {
    const props = generalTab()

    return <ArticleContentShort {...props}>{demoContent}</ArticleContentShort>
  })
  .addWithJSX('With dropcap', () => {
    const props = generalTab({ hasDropcap: true })

    return <ArticleContentShort {...props}>{demoContent}</ArticleContentShort>
  })
  .addWithJSX('With sidebar', () => {
    const props = generalTab()

    return (
      <ArticleContentShort
        {...props}
        sidebar={<RelatedPosts {...relatedPosts} />}
      >
        {demoContent}
      </ArticleContentShort>
    )
  })
