import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
    render() {
        return (
            <div id="m1-body" className="homepage-body">
                <div className="m1-body__container h-100">
                    <div className="m1-body__content h-100 d-flex flex-column justify-content-center">
                        <div className="homepage--logo">
                            <div className="logo--container d-flex justify-content-center">
                                <img src="../../assets/img/asset-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="homepage--description">
                            <div className="description--container d-flex flex-column align-items-center">
                                <span className="description-line line-1">Là dự án phi lợi nhuận</span>
                                <span className="description-line line-2">nơi lưu trữ và cung cấp thông tin về thị trường Bất động sản
                             <span className="highlight">Việt Nam …</span></span>
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}

Body.propTypes = {

};

export default Body;