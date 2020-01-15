import React, {Component} from "react";
import styles from "./ErrorPage.module.css";
import heartImage from "../../assets/images/heart-broken-solid.svg";
import sadImage from "../../assets/images/sad-tear-solid.svg";
import warningImage from "../../assets/images/exclamation-circle-solid.svg";

class ErrorPage extends Component {

  state = {activeImage: heartImage}

  componentDidMount(){
    this.updateImages();
  }

  componentWillUnmount(){
    console.log("Stopping Error Page Timer");
    clearInterval(this.timer);
  }

  updateImages = () =>{
    let newImageSpot = 0;
    let alertPrompt = 0;
    let imageArray = [heartImage, sadImage, warningImage];
    this.timer = setInterval(() => {
      newImageSpot++;
      alertPrompt++;
      if (newImageSpot > 2) newImageSpot = 0;
      this.setState({activeImage: imageArray[newImageSpot]});
      if (alertPrompt === 10 ) alert("Error Page Timer Is Running!!!");
    }, 3000)
  }

  render(){
    return (
      <div className={styles.wrapper}>
        <img className={styles.errorIcon} src={this.state.activeImage} alt="no results icon" />
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or you may not have
          permission to access that space.
        </p>
      </div>
    );
  }
};

export default ErrorPage;