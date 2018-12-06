import React from "react";
import PropTypes from "prop-types";

import Icon from "../../atoms/icons/Icon";

const ContentBlockExpand = ({ kicker, title, description }) => {
  return (
    <div className="js-this c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark">
      <div className="c-block__header">
        <div className="c-block__title u-padding">
          {title && (
            <h2 className="u-font--primary--s u-theme--color--darker">
              <span className="u-theme--color--base">
                <em>{kicker}</em>
              </span>{" "}
              {title}
            </h2>
          )}
          <div className="c-block__toggle">
            <button
              className="js-toggle o-button o-button--outline o-button--toggle o-button--small"
              data-toggled="this"
              data-prefix="this"
            >
              <span className="u-icon u-icon--xs u-path-fill--white">
                <Icon name="plus" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="c-block__body u-padding u-padding--zero--top u-spacing">
        <p>{description}</p>
      </div>
    </div>
  );
};

ContentBlockExpand.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  description: PropTypes.string
};

export default ContentBlockExpand;
