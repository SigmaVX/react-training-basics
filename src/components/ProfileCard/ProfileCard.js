import React from "react";
import styles from "./ProfileCard.module.css";
import PropTypes from "prop-types";

const ProfileCard = props => {

  return (
    <div className={styles.wrapper}>
        <div className={styles.imageWrapper} >
            <img 
                className={styles.cardImage} 
                src={props.imageSrc} 
                alt={`${props.name}'s Headshot`}
                data-testid={`${props.name}-icon`}
            />
        </div>
        <h3 className={styles.headerTitle}>{props.name}</h3>
        <hr className={styles.hr}/>
        <p className={styles.cardText}>Key Code: {props.keyCode}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  keyCode: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default ProfileCard;