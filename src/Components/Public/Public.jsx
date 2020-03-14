import React, { Component } from 'react';
import Annonymous from "../../images/annonymous.jpg";
import styles from "./Public.module.scss";

class Public extends Component {
  render() { 
    return (
      <>
        <div onClick={this.props.signIn} className={styles.btndiv}>
          <button>Sign in with Google</button>
        </div>

        <div className={styles.wrapper}>
          <h1>Hi, I'm Annonymous</h1>
          <img src={Annonymous} alt="" className={styles.image}/>
          <h1>My email is CLASSIFIED</h1>
        </div>
      </>
    );
  }
}
 
export default Public;