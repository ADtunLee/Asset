import React, { Component } from 'react';
import { AddScriptTag } from './Constants/Config'
import NotFound from './Components/NotFound'
//config route
import routes from './Routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'start'
        };
    }
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return (
            <Switch>
              
                {result}
                <Route component={NotFound}></Route>
            </Switch>
        );
    }
    render() {

        return (
            <Router>
                {this.showContentMenus(routes)}
            </Router>
        );
    }
}

export default App;
