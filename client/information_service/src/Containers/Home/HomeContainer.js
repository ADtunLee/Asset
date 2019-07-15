//import libery
import React, { Component } from 'react';
import { connect } from 'react-redux'

//import Components
import Home from '../../Components/Homepage/Home'
import Footer from '../../Components/Homepage/Footer'
import Body from '../../Components/Homepage/Body'
import HomeNav from '../../Components/Menu/HomeNav'
import HomeMobileNav from '../../Components/Menu/HomeMobileNav'
import Search from '../../Components/Homepage/Seach/Search'
import Input from '../../Components/Homepage/Seach/Input'
import Result from '../../Components/Homepage/Seach/Result'

//import Actions
import { SearchByKeywordRequest, InputSearchByKeyword } from '../../Actions/HomeAction'

class HomeContainer extends Component {

    render() {
        var { searchList } = this.props
        console.log(searchList)
        return (
            <Home>
                <HomeNav></HomeNav>
                <HomeMobileNav></HomeMobileNav>
                <Body>
                    <Search>
                        <Input onSearch={this.props.SearchByKeyword}>
                            <Result
                                filteredSuggestions={searchList}
                                onResultClick={this.onResultClick}>
                            </Result>
                        </Input>

                    </Search>
                </Body>
                <Footer></Footer>
            </Home>

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);