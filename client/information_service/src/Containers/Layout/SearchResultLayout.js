import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import NewContainer from '../Result/NewContainer'
import PriceContainer from '../Result/PriceContainer'
class SearchResult extends Component {
    constructor(props) {
        super(props)
        console.log('acb')
    }
    
    render() {
        console.log('acn')
        return (
           <React.Fragment>
               <Switch>
                    <Route path="/ket-qua/tin-tuc" component={NewContainer}></Route>
                    <Route path="/ket-qua/bang-gia" component={PriceContainer}></Route>
                </Switch>
           </React.Fragment>
        );
    }
}

export default SearchResult;