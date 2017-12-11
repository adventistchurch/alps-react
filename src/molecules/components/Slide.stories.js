import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
  date,
} from '@storybook/addon-knobs'

import Slide from './Slide'

import { all as allFonts } from '../../atoms/global/fonts'

const defaults = {
  title: 'Distinctio odio quam neque hic doloremque',
  heading: 'Lorem Ipsum',
  subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
  dek:
    'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
  cta: 'Mec cursus mi',
  url: 'https://adventist.io',
  datetime: new Date(),
  description: '',
  imageSrcSet: {
    default: '//placehold.it/200x150',
    500: '//placehold.it/400x300',
    750: '//placehold.it/600x450',
    1200: '//placehold.it/800x600',
  },
  imageAlt: 'Ipsam mollitia, deleniti officia culpa soluta',
  isLazy: false,
  isBlock: false,
  alignRight: false,
  className: '',
  headingClass: 'font--tertiary--xl',
  textClass: '',
  blockTitleClass: '',
  blockContentClass: '',
}

export const defaultSlide = defaults

storiesOf('molecules/components/Slide', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet)
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const isLazy = boolean('isLazy', defaults.isLazy)

    return (
      <Slide imageSrcSet={imageSrcSet} imageAlt={imageAlt} isLazy={isLazy} />
    )
  })

  .add('with text', () => {
    const heading = text('heading', defaults.heading)
    const subtitle = text('subtitle', defaults.subtitle)
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const datetime = date('datetime', defaults.datetime)
    const dek = text('dek', defaults.dek)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet)
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const isBlock = boolean('isBlock', defaults.isBlock)
    const isLazy = boolean('isLazy', defaults.isLazy)
    const alignRight = boolean('alignRight', defaults.alignRight)
    const headingClass = select('headingClass', allFonts, defaults.headingClass)

    return (
      <Slide
        heading={heading}
        subtitle={subtitle}
        title={title}
        description={description}
        datetime={datetime}
        dek={dek}
        cta={cta}
        url={url}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        isLazy={isLazy}
        isBlock={isBlock}
        alignRight={alignRight}
        headingClass={headingClass}
      />
    )
  })
