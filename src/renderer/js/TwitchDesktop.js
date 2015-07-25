'use strict';

// Libraries
import React from 'react';
import {Router, Route} from 'react-router';
import {history} from 'react-router/lib/HashHistory';

// Components
import Navigation from './components/Navigation/navigation';
import Menu from './components/Menu/menu';

// Views
// import Featured from './views/Featured';

// Main Application
class Application extends React.Component {
    render() {
        return (
            <div id="twitchdesktop">
                <div className="header">
                    <Menu />
                    <Navigation />
                </div>
            </div>
        );
    }
}

React.render(<Application />, document.body);

// Main render method for routing
// React.render((
//     <Router history={history}>
//         <Route path="/" component={Application}>
//             <Route path="featured" component={Featured} />
//         </Route>
//     </Router>
// ), document.body);
