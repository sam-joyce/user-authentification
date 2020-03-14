import React, { Component } from 'react';
import './App.css';
import Routes from "../../Routes/Routes";
import NavBar from '../../Components/NavBar/NavBar';;

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes />
      </>
    );
  }
}
