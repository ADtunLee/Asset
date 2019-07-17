//import libery
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//import Components
import Body from '../../Components/Homepage/Body'
import Search from '../../Components/Homepage/Seach/Search'
import Input from '../../Components/Homepage/Seach/Input'
import Result from '../../Components/Homepage/Seach/Result'
import HomeLayout from '../Layout/HomeLayout'
//import Actions
import { SearchByKeywordRequest, InputSearchByKeyword } from '../../Actions/HomeAction'

class HomeContainer extends Component {
    state = {
        redirect: false
    }
    onResultClick = (keyword) => {
        console.log(keyword)
    }
    render() {
        var { searchList } = this.props
        console.log(searchList)
        return (
            <HomeLayout>
                <Body>
                    <Search >
                        <Input onSearch={this.props.SearchByKeyword}>
                            <Result
                                filteredSuggestions={searchList}
                                onResultClick={this.onResultClick}>
                            </Result>
                        </Input>
                    </Search>
                </Body>
            </HomeLayout>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        searchList: state.search.ListSearchString
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        SearchByKeyword: (keyword) => {
            dispatch(SearchByKeywordRequest(keyword))
        },
        onResultClick: (keyword) => {
            dispatch(SearchByKeywordRequest(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);