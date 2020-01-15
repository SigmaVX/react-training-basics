import React from "react";
import styles from "./NavIcon.module.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const NavIcon = props => {
  return (
    <div
      className={styles.focusWrapper}
      tabIndex="0"
      role="navigation"
      aria-label={`Link To ${props.name}`}
      onClick={() => props.history.push(props.to)}
      onKeyPress={event =>
        event.key === "Enter" ? props.history.push(props.to) : null
      }
      data-testid={`${props.name}-background`}
    >
      <div className={styles.navIconWrapper}>
        <img
          src={props.imgSrc}
          className={styles.navIcon}
          alt={props.name}
          data-testid={`${props.name}-icon`}
        />
      </div>
    </div>
  );
};

NavIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default withRouter(NavIcon);
