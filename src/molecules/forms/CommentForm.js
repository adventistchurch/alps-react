import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = ({
  action,
  method,
  title,
  buttonText,
  small,
  medium,
  large,
}) => {
  const cols = 45
  const rowsDefault = 8
  const rows = large ? 12 : medium ? 8 : small ? 4 : rowsDefault

  return (
    <div className="c-comment-form">
      <div className="comment-respond u-spacing--half">
        <h3 className="comment-reply-title u-font--secondary--m u-text-transform--upper u-theme--color--darker">
          <strong>{title}</strong>{' '}
          <small>
            <a
              rel="nofollow"
              id="cancel-comment-reply-link"
              href="/spirituality/sabbath/article/the-sabbath-in-colossians/#respond"
              style={{ display: 'none' }}
            >
              Cancel reply
            </a>
          </small>
        </h3>
        <form
          action={action}
          method={method}
          className="u-spacing--half"
          noValidate=""
        >
          <p className="comment-form-comment">
            <textarea
              name="comment"
              cols={cols}
              rows={rows}
              aria-required="true"
              required="required"
            />
          </p>
          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              className="submit"
              value={buttonText}
            />
          </p>
        </form>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['post', 'get']),
  title: PropTypes.string,
  buttonText: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
}

CommentForm.defaultProps = {
  title: 'Leave a Comment',
  buttonText: 'Post Comment',
  method: 'post',
  medium: true,
}

export default CommentForm
