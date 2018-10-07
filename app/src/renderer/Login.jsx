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
    constructor(props){
        super(props)
    }

    state = {
        id : '',
        pw : ''
    }

    handleIdChange = (e) => {
        const v = e.target.value
        this.setState({id:v})
    }

    handlePwChange = (e) => {
        const v = e.target.value
        this.setState({pw:v})
    }

    handleLoginOnClick = (e) => {
        alert('클릭22' + this.state.id+', '+this.state.pw)
    }

    render() {
        return (
            <form style={FORM_STYLE}>
                <div className="field">
                    <label className="label">아이디</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" 
                            value={this.state.id}
                            onChange={this.handleIdChange}/>
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">비밀번호</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="" 
                            value={this.state.pw}
                            onChange={this.handlePwChange}/>
                    </div>
                </div>

                <div className="field">
                {/* type=submit default 값인데 자동 리로드가 된다 form 안에 있는 button 이라면  */}
                    <button className="button" type="button" onClick={this.handleLoginOnClick}>login</button>
                </div>
            </form>
        );
    }
}

Login.propTypes = {

};

export default Login;
