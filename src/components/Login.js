import React from 'react';
import '../styles/style.scss';

function Login() {
    return (
        <div className="login__container">
            <form className="login" id="login__form">
                <h1>ĐĂNG NHẬP</h1>
                {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}
                <h4>Thông tin đăng nhập</h4>
                <div className="form__group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="form__group">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">ĐĂNG NHẬP</button>
            </form>
        </div>
    )
}

export default Login
