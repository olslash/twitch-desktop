'use strict';

import React from 'react';
import {Link, Navigation} from 'react-router';
let mui = require("material-ui");

// Components
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;
let IconButton = mui.IconButton;
let NavigationMenu = mui.Icons.NavigationMenu;
let NavigationChevronLeft = mui.Icons.NavigationChevronLeft;
let NavigationChevronRight = mui.Icons.NavigationChevronRight;
let { object } = React.PropTypes;

let menuItems = [
  {route: 'featured',  text: 'Featured'},
  {route: 'games',     text: 'Games'},
  {route: 'channels',  text: 'Channels'},
  {route: 'following', text: 'Following'}
];


class Header extends React.Component {
  static get contextTypes() {
    return {
      router: object.isRequired
    }
  }

  handleMenuClick() {
    this.refs.leftNav.open();
  }

  handleMenuChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  render() {
      return (
          <div id="navigation">
            <AppBar
                title="Featured"
                iconElementLeft={
                  <IconButton onClick={ this.handleMenuClick.bind(this) }>
                  <NavigationMenu />
                  </IconButton> }
                iconElementRight={
                  <div>
                    <IconButton onClick={ this.context.router.goBack }>
                      <NavigationChevronLeft />
                    </IconButton>
                    <IconButton>
                      <NavigationChevronRight onClick={ this.context.router.goForward } />
                    </IconButton>
                   </div>
                }>
              <LeftNav menuItems={menuItems}
                       onChange={ this.handleMenuChange.bind(this) }
                       docked={false}
                       ref="leftNav"/>
            </AppBar>
          </div>
      );
  }
}

export default Header;