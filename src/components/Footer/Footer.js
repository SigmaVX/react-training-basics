import React from "react";
import styles from "./Footer.module.css";
import fireImg from "../../assets/images/fire-solid.svg";
// import PropTypes from "prop-types";

const Footer = props => (
  <footer data-testid="primary-footer" className={styles.footer}>
    <img className={styles.icon} src={fireImg} alt={"fire"} />
  </footer>
);

export default Footer;
