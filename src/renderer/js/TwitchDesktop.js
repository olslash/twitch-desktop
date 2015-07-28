'use strict';

// Libraries
import React from 'react';
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';

// dumb mui shit is dumb
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let mui = require("material-ui");

// Components
import Header from './components/Header/header';

// Views
import Featured  from './views/Featured';
import Games     from './views/Games';
import Channels  from './views/Channels';
import Following from './views/Following';

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
                { this.props.children }
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
        <Route path="/" component={ Application }>
            <Route path="featured" component={ Featured }/>
            <Route path="games" component={ Games }/>
            <Route path="channels" component={ Channels }/>
            <Route path="following" component={ Following }/>
        </Route>
    </Router>
), document.body);
