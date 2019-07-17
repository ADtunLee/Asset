import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    render() {
        return (
            <div className="homepage--input-search">
                <div className="input-search__container d-flex justify-content-center">
                   {this.props.children}
                </div>
            </div>
        );
    }
}
Search.propTypes = {

};

export default Search;