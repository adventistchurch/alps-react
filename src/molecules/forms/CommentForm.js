import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../atoms/texts/Title'
import Form from './Form'

const CommentForm = ({ rows, submitLabel, title, ...props }) => {
  return (
    <div className="c-comment-form">
      <div className="u-spacing--half">
        <Title
          as="h3"
          type="secondary"
          size="m"
          color="darker"
          uppercase
          strong
        >
          {title}
        </Title>
        <Form spacing="half" noValidate {...props}>
          <p>
            <textarea
              aria-required="true"
              name="comment"
              required
              rows={rows}
            />
          </p>
          <p>
            <input name="submit" type="submit" value={submitLabel} />
          </p>
        </Form>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  title: PropTypes.string,
  submitLabel: PropTypes.string,
  rows: PropTypes.number,
}

CommentForm.defaultProps = {
  rows: 8,
  submitLabel: 'Post Comment',
  title: 'Leave a Comment',
}

export default CommentForm
