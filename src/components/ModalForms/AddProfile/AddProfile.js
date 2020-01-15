import React, {useState} from "react";
import styles from "./AddProfile.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const AddProfile = (props) =>{
    const [profileName, setProfileName] = useState("");
    const [keyCode, setKeyCode] = useState("");
    const [nameErrorText, setNameErrorText] = useState("");
    const [keyCodeErrorText, setKeyCodeErrorText] = useState("");
    const [validForm, setValidForm] = useState(false);

    const changeHandler = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        if(name === "profileName") setProfileName(value);
        if(name === "keyCode") setKeyCode(value);
        validate(name, value);
    }

    const validate = (name, value) =>{
        let validForm = false;
        if(name === "profileName" && value.length < 4){
            validForm = false;
            setNameErrorText("Name Must Be At Least 4 Characters");
        }else{
            if(keyCode.length === 3) validForm = true;
            setNameErrorText("");
        }

        if(name === "keyCode" && value.length !== 3){
            validForm = false;
            setKeyCodeErrorText("Key Code Must Be 3 Characters")
        }else{
            if(profileName.length >3) validForm = true;
            setKeyCodeErrorText("")
        }

        setValidForm(validForm);
    }

    const addProfile = () =>{
        let randomNumberOne = Math.floor(Math.random()*10);
        let randomNumberTwo = Math.floor(Math.random()*10);
        let sendObject = {
            name: profileName,
            keyCode: keyCode,
            imageSrc: `https://www.fillmurray.com/40${randomNumberOne}/40${randomNumberTwo}`
        }
        props.getNewProfile(sendObject);
        setKeyCode("");
        setProfileName("");
        setValidForm(false);
        props.closeModal();
    }

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.formHeader}>Add New Clone</h2>
            <p className={styles.subHeader}  style={{"color": validForm ? "green" : "red"}}>Valid Form: {validForm.toString()}</p>
            <form className={styles.formBody} style={props.style}>
                <Input name="profileName" label="Clone Name" changeHandler={changeHandler} value={profileName} errorText={nameErrorText}/>
                <Input name="keyCode" label="Key Code" changeHandler={changeHandler} value={keyCode} errorText={keyCodeErrorText}/>
            </form>
            <Button text="Cancel" type="warn" onClick={props.closeModal} />
            <Button text="Add Profile" type="cta" onClick={addProfile} disabled={!validForm}/>
        </div>
    );
} 


AddProfile.propTypes = {
    closeModal: PropTypes.func.isRequired,
    getNewProfile: PropTypes.func.isRequired
};

export default AddProfile;