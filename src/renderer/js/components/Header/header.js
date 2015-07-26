'use strict';

import React from 'react';
let mui = require("material-ui");

// Components
let AppBar = mui.AppBar;

class Header extends React.Component {
    render() {
        return (
            <div id="navigation">
                <AppBar 
                    title="Featured">
                </AppBar>
            </div>
        );
    }
}

export default Header;