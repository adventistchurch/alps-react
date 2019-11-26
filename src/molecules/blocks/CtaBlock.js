import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'
import { Div, HeadingThree, Paragraph } from '../../helpers/Element'

const getBackgroundRule = url => `.o-background-image {
  background-image: url('${url}');
}`

function CtaBlock({ asBackgroundImage, buttons, description, picture, title }) {
  const bgInlineStyles = useResponsiveStyles(getBackgroundRule, picture)

  const backgroundClass =
    picture && asBackgroundImage
      ? 'has-background-image o-background-image u-background--cover u-theme--gradient--bottom'
      : picture
      ? 'has-image'
      : ''

  return (
    <Div
      className={`c-cta-block c-block ${backgroundClass}`}
      borderSide="left"
      themeBorder="darker"
      themeBorderSide="left"
      canBe="dark-dark"
    >
      {bgInlineStyles && <InlineStyles styles={bgInlineStyles} />}
      <Div className="c-cta-block__content c-block__content" spacing>
        <Div className="c-cta-block__group c-block__group" spacing>
          {title && (
            <HeadingThree
              className="c-block__title"
              fontType="primary"
              fontSize={title && description ? 'l' : 'xl'}
            >
              {title}
            </HeadingThree>
          )}
          {description && (
            <Paragraph
              className="c-block__body"
              fontType="secondary"
              fontSize={title ? null : 'm'}
            >
              {description}
            </Paragraph>
          )}
        </Div>
        {Array.isArray(buttons) && buttons.length > 0 && (
          <Div className="c-cta-block__buttons c-block__buttons">
            {buttons.map(({ label, url, ...rest }, key) => (
              <Button
                as="a"
                className="c-block__button"
                iconSize="m"
                key={`cta-block-${key}`}
                text={label}
                url={url}
                {...rest}
              />
            ))}
          </Div>
        )}
      </Div>
      {picture && !asBackgroundImage && (
        <Div className="c-cta-block__image c-block__image o-background-image u-background--cover"></Div>
      )}
    </Div>
  )
}

CtaBlock.propTypes = {
  asBackgroundImage: PropTypes.bool,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
  description: PropTypes.string,
  picture: PropTypes.object,
  title: PropTypes.string.isRequired,
}

export default CtaBlock
