'use strict';

// Libraries
import React from 'react';
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';

// Components
import Navigation from './components';
import Menu from './components';

// Views
import Featured from './views/Featured';

// Main Application
class Application extends React.Component {
    render() {
        return (
            <div id="twitchdesktop">
                <Menu />
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}

// Main render method for routing
React.render((
    <Router history={history}>
        <Route path="/" component={Application}>
            <Route path="featured" component={Featured} />
        </Route>
    </Router>
), document.body);
