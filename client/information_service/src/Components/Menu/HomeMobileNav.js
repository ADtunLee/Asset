import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeMobileNav extends Component {
    render() {
        return (
            <div id="m1-header_mobile" className="homepage-header_mobile d-lg-none">
                <div className="m1-header_mobile__container">
                    <div className="m1-header_mobile__content d-flex justify-content-between">
                        <div className="m1-menu_mobile__drawer d-flex align-items-center">
                            <div className="mobile-drawer__content">
                                <div className="drawer-toggler" data-toggle="modal" data-target="#drawerToggleExternalContent"
                                    aria-controls="drawerToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <img src="../../assets/img/icon-drawer.png" alt="" />
                                </div>
                                <div className="modal fadeInRight" id="drawerToggleExternalContent" tabIndex="-1" role="dialog"
                                    aria-labelledby="drawerToggleExternalContent" aria-hidden="true">
                                    <div className="modal-content">
                                        <nav className="mobile-navbar">
                                            <div className="mobile-navbar__content">
                                                <a className="navbar-brand" href="/">
                                                    <img src="../../assets/img/asset-logo.png" alt="" />
                                                </a>
                                                <div className="navbar__items">
                                                    <div className="navbar--item">
                                                        <a href="/ket-qua/thong-tin">Thông tin</a>
                                                    </div>
                                                    <div className="navbar--item">
                                                        <a href="/ban-do">Bản đồ</a>
                                                    </div>
                                                    <div className="navbar--item">
                                                        <a href="/ket-qua/bang-gia">Bảng giá</a>
                                                    </div>
                                                    <div className="navbar--item">
                                                        <a href="#">Danh bạ</a>
                                                    </div>
                                                    <div className="navbar--item">
                                                        <a href="#">Tài nguyên</a>
                                                    </div>
                                                    <div className="navbar--item">
                                                        <a href="#">Hỏi đáp</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m1-menu_mobile__items d-flex align-items-center">
                            <div className="m1-menu--item dropdown dropdown__menu-tool">
                                <div className="dropdown-toggle" data-toggle="dropdown">
                                    <img className="img_menu" src="../../assets/img/Group 1.png" alt="" />
                                </div>
                                <div className="dropdown-menu menu-tool">
                                    <div className="dropdown-item">
                                        <a href="#">
                                            <img src="../../assets/img/Group 1569.png" alt="" /><span className="menu-tool--text">Tính toán khoản vay</span>
                                        </a>
                                    </div>
                                    <div className="dropdown-item">
                                        <a href="#">
                                            <img src="../../assets/img/baseline-insert_chart-24px.png" alt="" /><span
                                                className="menu-tool--text">Tính toán hiệu quả dự án</span>
                                        </a>
                                    </div>
                                    <div className="dropdown-item">
                                        <a href="#">
                                            <img src="../../assets/img/baseline-monetization_on-24px.png" alt="" /><span
                                                className="menu-tool--text">Tài chính cá nhân</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="m1-menu--item">
                                <div className="menu-notify">
                                    <a href="#"><img src="../../assets/img/Group 22.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="m1-menu--item">
                                <a className="btn-login" href="/dang-nhap">
                                    <img src="../../assets/img/icon-avatar.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

HomeMobileNav.propTypes = {

};

export default HomeMobileNav;