import React, { Component } from 'react';
import { Router, Redirect } from "@reach/router";
import Login from "../Components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import { globalHistory } from "@reach/router";
import firebase, { providers } from "../firebase";

import Public from "../Components/Public/Public";
import Private from "../Components/Private/Private";

const NotFound = () => (<h2>Not Found</h2>);

class Routes extends Component {
  state = {
    user: null
  }

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(providers.google)
      .then(result => {
        this.setState({user:result.user});
        console.log(this.state.user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({user: null});
        globalHistory.navigate("/login");
        console.log(this.state.user);
      })
  }

  render() { 
    return (
      <Router>
        <Redirect noThrow from="/" to="public" />
        <Login path="login" signIn={this.signIn} />
        <Public path="public" />
        <PrivateRoutes path="private" user={this.state.user}>
          <Private path="me" signOut={this.signOut} user={this.state.user} />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    );
  }
}
 
export default Routes;