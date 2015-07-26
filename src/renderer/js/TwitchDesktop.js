'use strict';

// Libraries
import React from 'react';
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';

let mui = require("material-ui");

// Components
import Header from './components/Header/header';

// Views
// import Featured from './views/Featured';

// Main Application
let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

class Application extends React.Component {
    constructor() {
        super();
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render() {
        return (
            <div id="twitchdesktop">
                <Header />
            </div>
        );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
}

// Main render method for routing
React.render((
    <Router history={history}>
        <Route path="/" component={Application}>
        </Route>
    </Router>
), document.body);
