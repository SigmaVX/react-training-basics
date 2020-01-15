import React from "react";
import styles from "./Header.module.css";
import NavIcon from "../NavIcon/NavIcon";
import profileImage from "../../assets/images/clone-50-black.png";
import loginImage from "../../assets/images/sign-in-alt-solid.svg";
import logoutImage from "../../assets/images/sign-out-alt-solid.svg";
import infoImage from "../../assets/images/info-solid.svg";
import PropTypes from "prop-types";

const Header = props => {
  const { classes, ...rest } = props;
  let loginColors = props.loggedIn ? styles.loggedIn : styles.noLogin;

  return (
    <header className={[styles.wrapper, loginColors].join(" ")}>
      <h1 className={styles.headerTitle} >
        {props.loggedIn ? props.name : "Please Sign In"}
      </h1>
      <div className={styles.optionsWrapper}>
        <NavIcon to="/info" name="Info" imgSrc={infoImage} {...rest} />
        {props.loggedIn
          ?   <React.Fragment>
                <NavIcon to="/" name="Home" imgSrc={profileImage} {...rest} />
                <NavIcon to="/logout" name="Login" imgSrc={logoutImage} {...rest} />
              </React.Fragment>
          :   <NavIcon to="/login" name="Login" imgSrc={loginImage} {...rest} />
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Header;
