import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div id="autoComplete__content" className="w-100 input-search__content collapsed">
                <input type="text" id="autoComplete" className="form-control" placeholder="Search ..." name="keyword" tabIndex="1"
                    value={this.state.keyword}
                    onChange={this.onChange}
                />
                {this.props.children}
            </div>
        );
    }
}

Input.propTypes = {

};

export default Input;