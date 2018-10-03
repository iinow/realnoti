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
        this.state = {
            id : '',
            pw : ''
        }
    }
    // state = {
        
    // }

    handleIdChange = (e) => {
        const v = e.target.value
        this.setState({id:v})
    }

    handlePwChange = (e) => {
        const v = e.target.value
        this.setState({pw:v})
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
                    <button className="button" onClick={(e)=>{
                        alert('클릭' + this.state.id+', '+this.state.pw)
                    }}>login</button>
                </div>
            </form>
        );
    }
}

Login.propTypes = {

};

export default Login;
