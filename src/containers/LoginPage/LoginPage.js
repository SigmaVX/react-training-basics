import React, { Component } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import { getProfileData } from "../../utils/apiHelpers/loginApi";
import logoImg from "../../assets/images/clone-100.png";
import styles from "./LoginPage.module.css";
import PropTypes from "prop-types";

class LoginPage extends Component {
  state = {
    loginPending: false,
    loginFailed: false,
    loginText: ""
  };

  componentDidMount() {
    // let wasLoggedIn = sessionStorage.getItem("loggedIn");
    // if(wasLoggedIn) this.getLoginData();
  }

  getLoginData = async () => {
    console.log("Starting Mock Login API Call");
    this.safeStateUpdate({
      loginPending: true,
      loginFailed: false,
      loginText: "...Checking Credentials"
    });
    // let wasLoggedIn = sessionStorage.getItem("loggedIn");
    // let response = await getProfileData(wasLoggedIn);
    let response = await getProfileData(false);
    setTimeout(() => {
      if (response.errors && response.errors.length > 0) {
        this.safeStateUpdate({
          loginPending: false,
          loginFailed: true,
          loginText: response.errors
        });
      } else {
        this.props.updateAppState({
          loggedIn: true,
          userName: response.userName
        });
        this.props.history.push("/");
      }
    }, 1000);
  };

  safeStateUpdate = updateObject => {
    console.log("[Login] Safely Updating State With: ", updateObject);
    this.setState(prevState => {
      return {
        ...prevState,
        ...updateObject
      };
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loginPending ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <img src={logoImg} alt="Portal Logo" className={styles.logo} />
            <h1>Click To Login</h1>
            <Button
              text={this.state.loginFailed ? "Try Again" : "Login"}
              onClick={this.getLoginData}
              type={"cta"}
            />
          </React.Fragment>
        )}
        <h2 className={this.state.loginFailed ? styles.failText : styles.text}>
          {this.state.loginText}
        </h2>
      </div>
    );
  }
}

LoginPage.propTypes = {
  updateAppState: PropTypes.func.isRequired
};

export default LoginPage;
