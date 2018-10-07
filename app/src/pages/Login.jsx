import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BodyBackgroundColor = '#F9F9F9'
const FORM_STYLE = {
    margin: "0 auto",
    padding: 30,
    width: 300,
    border : "1px solid #D7DDE1",
    borderRadius:"7px",
    backgroundColor: "white"
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: "auto",
    // marginBottom: "auto"
    // margin-left:auto,
    // margin-right:auto;
    // backgroundColor: "red"
}

const SIGNUP_LINK_STYLE = {
    display: "inline-block",
    marginLeft: 10
}

class Login extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        id: '',
        pw: ''
    }

    componentWillMount = () => {
        document.body.style.backgroundColor = BodyBackgroundColor
    }

    handleIdChange = (e) => {
        const v = e.target.value
        this.setState({ id: v })
    }

    handlePwChange = (e) => {
        const v = e.target.value
        this.setState({ pw: v })
    }

    handleLoginOnClick = (e) => {
        this.setState({
            id:'',
            pw:''
        })
        alert('클릭22' + this.state.id + ', ' + this.state.pw)
        this.etxId.focus()
    }

    render() {
        return (
            <form>
                <div style={{ width: 20, height: 60, padding: '10px', margin: "0 auto"}}>
                    
                </div>
                <div style={FORM_STYLE}>
                    <div className="field">
                        <label className="label">아이디</label>
                        <div className="control">
                            <input className="input" type="text" placeholder=""
                                value={this.state.id}
                                onChange={this.handleIdChange} 
                                ref={(ref)=>this.etxId = ref}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">비밀번호</label>
                        <div className="control">
                            <input className="input" type="text" placeholder=""
                                value={this.state.pw}
                                onChange={this.handlePwChange} 
                                onKeyPress={(e)=>{
                                    if(e.key == 'Enter'){
                                        this.handleLoginOnClick()
                                    }
                                }}/>
                        </div>
                    </div>

                    <div className="field">
                        {/* type=submit default 값인데 자동 리로드가 된다 form 안에 있는 button 이라면  */}
                        <button className="button" type="button" onClick={this.handleLoginOnClick}>login</button>
                    </div>
                </div>
            </form>
        );
    }
}

Login.propTypes = {

};

export default Login;
