import React, { Component } from 'react';
import { Link } from "@reach/router";

class NavItem extends Component {
  render() { 
    return (
      <p>
        <Link to={this.props.route}>{this.props.name}</Link>
      </p>
    );
  }
}
 
export default NavItem;