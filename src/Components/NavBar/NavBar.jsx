import React, { Component } from 'react';
import NavItem from "./NavItem/NavItem";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
  render() { 
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavItem route="/public" name="Public" />
          <NavItem route="/private/me" name="Private" />
        </ul>
      </nav>
    );
  }
}
 
export default NavBar;