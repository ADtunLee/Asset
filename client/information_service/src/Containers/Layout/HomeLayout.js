import React, { Component } from 'react';
import HomeNav from '../../Components/Menu/HomeNav'
import HomeMobileNav from '../../Components/Menu/HomeMobileNav'
import Footer from '../../Components/Homepage/Footer'
import Home from '../../Components/Homepage/Home'
import { AddLinkTag, AddScriptTag } from '../../Constants/Config'

class HomeLayout extends Component {
    constructor(props){
        super(props)
        var link = [
            '/assets/stylesheets/index.css',
            '/assets/stylesheets/pages/_home.css',
            '/vendor/font-awesome/css/font-awesome.min.css',
            '/vendor/ap8/css/style.css',
            '/vendor/bootstrap/css/bootstrap.min.css',
    
        ]
        var script = [
            '/vendor/jquery/jquery-3.2.1.slim.min.js',
            '/vendor/popper.js/popper.min.js',
            '/vendor/bootstrap/js/bootstrap.min.js',
            '/vendor/auto-complete/autoComplete.js',
            '/assets/scripts/HomePage/generic.js',
            '/assets/scripts/HomePage/index.js'
        ]
        AddScriptTag(script, document.body)
        AddLinkTag(link,document.head)
    }
    componentWillMount() {
        
    }
    render() {
        
        return (
            <Home>
                <HomeNav></HomeNav>
                <HomeMobileNav></HomeMobileNav>
                {this.props.children}
                <Footer></Footer>
            </Home>
        );
    }
}

export default HomeLayout;