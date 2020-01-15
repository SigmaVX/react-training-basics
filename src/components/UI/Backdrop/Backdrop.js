  
import React from "react";
import style from "./Backdrop.module.css";
import PropTypes from "prop-types";


const Backdrop = (props) =>{
    return props.show? <div className={style.Backdrop} onClick={props.clicked}></div> : null
};

Backdrop.propTypes = {
    clicked: PropTypes.func.isRequired
  };

export default Backdrop;