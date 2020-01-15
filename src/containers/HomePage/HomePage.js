import React, {Component} from "react";
import styles from "./HomePage.module.css";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { getProfiles } from "../../utils/apiHelpers/homeApi";
import Modal from "../../components/UI/Modal/Modal";
import AddProfile from "../../components/ModalForms/AddProfile/AddProfile";
import PropTypes from "prop-types";


class HomePage extends Component{
    state = {
        profiles: [],
        loading: true,
        showModal: false
    }

    componentDidMount(){
        if(this.props.historyProfiles.length > 0){
            this.safeStateUpdate({profiles: this.props.historyProfiles, loading: false});
        }else{
            this.getProfiles();     
        }
    }

    getNewProfile = (profile) =>{
        let newProfileArray = [...this.state.profiles];
        newProfileArray.push(profile);
        this.props.updateAppState({history: newProfileArray});
        this.safeStateUpdate({profiles: newProfileArray});
    }

    getProfiles = async () =>{
        if(!this.state.loading) this.safeStateUpdate({loading: true});
        let response = await getProfiles();
        setTimeout(()=>this.safeStateUpdate({
            loading: false,
            profiles: response
        }), 1000);
    }

    safeStateUpdate = updateObject => {
        console.log("[Home] Safely Updating State With: ", updateObject);
        this.setState(prevState => {
            return {
                ...prevState,
                profiles: [...prevState.profiles],
                ...updateObject
            };
        });
    };

    render(){
        let profileSection = <Spinner />
        if(!this.state.loading) profileSection = (
            this.state.profiles.map((card, index)=>(
                <ProfileCard key={index} imageSrc={card.imageSrc} name={card.name} keyCode={card.keyCode} />
        )))

        return(
            <div className={styles.wrapper}>
                <h1>BMC Profiles</h1>
                <Button 
                    text={"Create Clone"} 
                    onClick={()=>this.safeStateUpdate({showModal: true })} 
                    type={"std"}
                />
                <section className={styles.profileCardsWrapper}>
                    {profileSection}
                </section>
                <Modal 
                    closeModal={()=>this.safeStateUpdate({showModal: false})} 
                    showModal={this.state.showModal} 
                >
                    <AddProfile 
                        closeModal={()=>this.safeStateUpdate({showModal: false})} 
                        getNewProfile={this.getNewProfile}
                    />
                </Modal>

            </div>
        );
    }
}

HomePage.propTypes = {
    historyProfiles: PropTypes.array.isRequired,
    updateAppState: PropTypes.func.isRequired
};
export default HomePage;
