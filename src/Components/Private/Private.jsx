import React, { Component } from 'react';
import styles from "../Public/Public.module.scss";

class Private extends Component {
  render() { 
    return (
      <>
      <div className={styles.wrapper}>
        <h1>{this.props.user.displayName}</h1>
        <h3></h3>
        <img src={this.props.user.photoURL} alt="" className={styles.image}/>
        <p>{this.props.user.email}</p>
      </div>
      </>
    );
  }
}
 
export default Private;