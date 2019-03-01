import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import TextArea from './elements/TextArea'
import Title from '../../atoms/texts/Title'
import Form from './elements/Form'

const CommentForm = ({ onSubmit, rows, submitLabel, title, ...props }) => {
  return (
    <Form className="c-comment-form" spacingSize="half" noValidate {...props}>
      <Title
        as="h3"
        themeColor="darker"
        fontSize="m"
        fontType="secondary"
        text={title}
        textStyle="strong"
        transform="upper"
      />
      <TextArea
        aria-required={true}
        name="comment"
        required="required"
        rows={rows}
      />
      <Button text={submitLabel} onSubmit={onSubmit} />
    </Form>
  )
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func,
  rows: PropTypes.number,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
}

CommentForm.defaultProps = {
  rows: 8,
  submitLabel: 'Post Comment',
  title: 'Leave a Comment',
}

export default CommentForm
