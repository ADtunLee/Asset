import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div id="m1-footer" className="homepage-footer">
                <div className="m1-footer__container">
                    <div className="m1-footer__content">
                        <div className="m1-footer-1">
                            <a href="#">Giới thiệu</a>
                            <a href="#">Hướng dẫn</a>
                        </div>
                        <div className="m1-footer-2 d-none d-sm-block">
                            <div className="d-flex m1-footer-2__content">
                                <marquee className="footer-2--left">
                                    <div className="view1__content">
                                        <span><span>Tin nhanh: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                          sollicitudin,
                                        lorem quis biben <a href="#">Xem nhanh</a></span>
                                    </div>
                                </marquee>
                                <marquee className="footer-2--right">
                                    <div className="view2__content">
                                        <span><span> Giá bán: </span>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                          sollicitudin,
                                     lorem quis biben</span>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                        <div className="m1-footer-2 d-sm-none">
                            <div className="d-flex m1-footer-2__content">
                                <marquee className="footer-2">
                                    <div className="view1__content">
                                        <span><span>Tin nhanh: </span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                          sollicitudin,
                                        lorem quis biben <a href="#">Xem nhanh</a></span>
                                        <span><span> Giá bán: </span>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                          sollicitudin,
                                        lorem quis biben</span>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Footer.propTypes = {

};

export default Footer;