import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input =(props)=>{
    return(
        <div className={styles.inputWrapper}>
            <label className={styles.label} htlmFor={props.name}>{props.label}</label>
            <input 
                className={styles.input} 
                type="input" 
                name={props.name} 
                id={props.name} 
                value={props.value} 
                onChange={(event)=>props.changeHandler(event)}
            />
            <p className={styles.errorText}>{props.errorText}</p>
        </div>
    );
}

Input.propTypes = {
    errorText: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.bool.isRequired
    ])
};

export default Input;