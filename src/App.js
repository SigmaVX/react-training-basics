import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import InfoPage from "./containers/InfoPage/InfoPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import HomePage from "./containers/HomePage/HomePage";
import Logout from "./containers/Logout/Logout";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false,
    userName: "",
    history: []
  };

  componentDidMount() {
    // Toggle Off To Test Persistence
    // let loggedIn = sessionStorage.getItem("loggedIn");
    // if(loggedIn && this.state.loggedIn === false) this.props.history.push("/login");
  }

  logoutHandler = () => {
    this.safeStateUpdate({ loggedIn: false, userName: "", history: [] });
    // sessionStorage.removeItem("loggedIn");
    // sessionStorage.removeItem("name");
  };

  safeStateUpdate = updateObject => {
    console.log("[App] Safely Updating State With: ", updateObject);
    this.setState(prevState => {
      return {
        ...prevState,
        history: [...prevState.history],
        ...updateObject
      };
    });
  };

  updateAppState = data => {
    this.safeStateUpdate(data);
  };

  render() {
    let routes = (
      <Switch>
        <Route
          path="/error"
          exact
          render={props => (
            <ErrorPage loggedIn={this.state.loggedIn} {...props} />
          )}
        />
        <Route
          path="/login"
          exact
          render={props => (
            <LoginPage updateAppState={this.updateAppState} {...props} />
          )}
        />
        <Route
          path="/info"
          render={props => (
            <InfoPage profiles={this.state.profiles} {...props} />
          )}
        />
        <Redirect to="/error" />
      </Switch>
    );

    if (this.state.loggedIn)
      routes = (
        <Switch>
          <Route
            path="/info"
            render={props => (
              <InfoPage profiles={this.state.profiles} {...props} />
            )}
          />
          <Route
            path="/error"
            exact
            render={props => (
              <ErrorPage loggedIn={this.state.loggedIn} {...props} />
            )}
          />
          <Route
            path="/login"
            exact
            render={props => (
              <LoginPage updateAppState={this.updateAppState} {...props} />
            )}
          />
          <Route
            path="/logout"
            exact
            render={props => (
              <Logout logoutHandler={this.logoutHandler} {...props} />
            )}
          />
          <Route
            path="/"
            render={props => (
              <HomePage
                historyProfiles={this.state.history}
                updateAppState={this.updateAppState}
                {...props}
              />
            )}
          />
          <Redirect to="/error" />
        </Switch>
      );

    return (
      <div className="App">
        <Header name={this.state.userName} loggedIn={this.state.loggedIn} />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
