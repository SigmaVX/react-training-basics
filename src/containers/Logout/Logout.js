import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Logout extends Component {
    componentDidMount () {
        this.props.logoutHandler();
    }

    render(){
        return <Redirect to="/info"/>
    }
}

export default Logout;