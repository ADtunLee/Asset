import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {


    onSearch = (suggestionTitle) => {
        this.props.onSearch(suggestionTitle)
    }

    render() {
        console.log(filteredSuggestions)
        var { filteredSuggestions } = this.props;
        if (Array.isArray(filteredSuggestions) && filteredSuggestions.length) {
            var suggestionsListComponent = (
                <React.Fragment>
                    {filteredSuggestions.map((suggestion, index) => {
                        // Flag the active suggestion with a class


                        return (
                            <li data-result={suggestion.title} className="autoComplete_result "
                                key={index}
                                onClick={()=>this.onSearch(suggestion.title)} tabIndex="1">
                                {suggestion.title}
                            </li>
                        );
                    })}
                </React.Fragment>
            );
        } else {
            var suggestionsListComponent = (
                <li className="no_result" tabIndex="1">Không tìm thấy kết quả</li>
            );
        }
        return (
            <ul id="autoComplete_results_list">
                {suggestionsListComponent}
            </ul>
        );
    }
}
export default Result;