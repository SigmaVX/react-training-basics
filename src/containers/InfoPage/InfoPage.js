import React, {Component} from "react";
import styles from "./InfoPage.module.css";
import oneUser from "../../assets/images/user-solid.svg";
import twoUsers from "../../assets/images/user-friends-solid.svg";
import threeUsers from "../../assets/images/users-solid.svg";


class InfoPage extends Component {

  state = {activeImage: oneUser}

  componentDidMount(){
    this.updateImages();
  }

  componentWillUnmount(){
    console.log("Stopping Info Page Timer");
    clearInterval(this.timer);
  }

  updateImages = () =>{
    let newImageSpot = 0;
    let alertPrompt = 0;
    let imageArray = [oneUser, twoUsers, threeUsers];
    this.timer = setInterval(() => {
      newImageSpot++;
      alertPrompt++;
      if (newImageSpot > 2) newImageSpot = 0;
      this.setState({activeImage: imageArray[newImageSpot]});
      if (alertPrompt === 10 ) alert("Info Page Timer Is Running!!!");
    }, 3000)
  }


  render(){
    return (
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.icon} src={this.state.activeImage} alt="cloning in action" />
        </div>
        <h1>Welcome To The BMC</h1>
        <p className={styles.infoText}>
          Lorem ipsum dolor amet butcher iPhone 90's direct trade offal in. Af tbh veniam qui, etsy everyday carry gluten-free officia kitsch direct trade messenger bag iPhone. Ut pok pok tattooed drinking vinegar, nostrud hella succulents. Gluten-free wolf slow-carb etsy, sed do brunch yr tousled voluptate small batch officia.
        
          Pitchfork fashion axe enim chambray duis small batch PBR&B velit. Edison bulb fashion axe cronut ullamco cornhole woke chartreuse dolor elit quis laboris chambray taiyaki.   Palo santo copper mug ullamco in, fashion axe snackwave banh mi aliquip gastropub typewriter. Bespoke kitsch knausgaard enamel pin, poutine shoreditch gentrify stumptown hoodie man braid humblebrag id microdosing selfies.
        
          Beard poke mustache vaporware man bun deep v elit eu. Cold-pressed pariatur street art, palo santo nisi iceland deep v excepteur shabby chic paleo live-edge gochujang twee franzen. Nulla ipsum cloud bread yuccie blue bottle iceland tempor. Nisi hexagon copper mug tousled fam dolor et actually woke enim. Mollit pickled consequat succulents.
        </p>
      </div>
    );
  }
};

export default InfoPage;