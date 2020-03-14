import React, { Component } from "react";
import styles from "./Login.module.scss";

export default class Login extends Component {
  render() {
    return(
      <div onClick={this.props.signIn} className={styles.login}>
        <button>Sign in with Google</button>
      </div>
    );
  }
}