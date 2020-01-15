import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button =(props)=>{
    let buttonStyle = null;
    switch(props.type){
        case("std"):
            buttonStyle = styles.std;
            break;
        case("cta"):
            buttonStyle = styles.cta;
            break;
        case("warn"):
            buttonStyle = styles.warn;
            break;
        default:
            buttonStyle = styles.std;
    }

    return(
        <button 
            className={[styles.baseStyle, buttonStyle].join(" ")}
            onClick={props.onClick} 
            onKeyPress={event => event.key === "Enter" ? props.onClick : null}
            disabled={props.disabled}
            data-testid={`color-${props.type}`}
        >
            {props.text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default Button;