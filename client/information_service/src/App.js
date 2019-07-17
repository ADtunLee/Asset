import React, { Component } from 'react';
import { AddScriptTag } from './Constants/Config'
//config route
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomeContainer from './Containers/Home/HomeContainer'
import NotFound from './Components/NotFound'
import SearchResultLayout from './Containers/Layout/SearchResultLayout'
import NewContainer from './Containers/Result/NewContainer'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'start'
        };
    }
    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomeContainer}></Route>
                    <Route path="/ket-qua" component={SearchResultLayout}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
