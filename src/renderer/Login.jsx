import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FORM_STYLE = {
    margin : "0 auto",
    padding : 30
}

const SIGNUP_LINK_STYLE = {
    display:"inline-block",
    marginLeft:10
}

class Login extends Component {
    render() {
        return (
            <form style={FORM_STYLE}>
                <div className="field">
                    <label className="label">아이디</label>
                    <div className="control">
                        <input className="input" type="text" placeholder=""/>
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">비밀번호</label>
                    <div className="control">
                        <input className="input" type="text" placeholder=""/>
                    </div>
                </div>

                <div className="field">
                    <button className="button">login</button>
                </div>
            </form>
        );
    }
}

Login.propTypes = {

};

export default Login;
