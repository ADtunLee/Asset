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
import { SearchByKeywordRequest } from '../../Actions/HomeAction'

class HomeContainer extends Component {

    onSearch = (keyword) => {
        return this.props.SearchByKeyword(keyword);
    }
    render() {
        return (
            <Home>
                <HomeNav></HomeNav>
                <HomeMobileNav></HomeMobileNav>
                <Body>
                    <Search>
                        <Input >
                            <Result
                                filteredSuggestions={[{title:'kinh'}]}
                                onSearch={this.onSearch}>
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
    console.log(state)
    return {
        search: state.search
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        SearchByKeyword: (keyword) =>{
            dispatch(SearchByKeywordRequest(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);