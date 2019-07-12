import React, { Component } from 'react';

//import stylesheet
// import '%PUBLIC_URL%/assets/stylesheets/index.css'
// import '../../../assets/stylesheets/pages/_home.css'
// import '../../../vendor/font-awesome/css/font-awesome.min.css'
// import '../../../vendor/ap8/css/style.css'
// import '../../../vendor/bootstrap/css/bootstrap.min.css'
//import script tag

class Home extends Component {
    render() {
        return (
            <div className="section-homepage">
                <div className="container-fluid homepage__container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Home;