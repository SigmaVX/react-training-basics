import React from "react";
import style from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = (props) =>{
    let modalClass;
    if (props.showModal){
        modalClass=`${style.Modal} ${style.show}` 
    } else {
        modalClass=`${style.Modal} ${style.hide}`
    }

    return(
        <React.Fragment>
            <Backdrop show={props.showModal} clicked={props.closeModal}/>
            <section className={modalClass} style={props.style}>
                {props.children}
            </section>
        </React.Fragment>
    );
} 


Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default Modal;