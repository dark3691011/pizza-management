import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.scss';
import logo from '../assets/logo.png';


function Header() {
    const navStyle = {
        textDecoration : 'none',
        color : '#ffffff'
    };

    return (
        <div className="header">
            <div className="header__left">
                <Link to="./"> <img src={logo} alt="logo"/> </Link>
            </div>
            <div className="header__middle">
                <Link to="/product-management" style={navStyle}>
                    <h4>QL SẢN PHẨM</h4>
                </Link>
                <Link to="/" style={navStyle}>
                    <h4>QL NGƯỜI DÙNG</h4>
                </Link>
                <Link to="/order-management" style={navStyle}>
                    <h4>QL HÓA ĐƠN</h4>
                </Link>
            </div>
            <div className="header__right">
                <div className="login__status">
                    <Link to="/login" style={navStyle}>
                        <a href="/">ĐĂNG NHẬP</a>
                    </Link>
                </div>          
            </div>
        </div>
    )
}

export default Header
