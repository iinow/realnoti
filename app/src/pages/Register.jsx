import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { URL_LOGIN } from '../util/constant'
import { fire } from '../util/Firebase'
import * as Model from '../model/index'

const REG_STYLE = {
    margin: "0px auto",
    padding: 30,
    minWidth: 100,
    maxWidth: 500,
    backgroundColor: '#FFFFFF'
}
const BodyBackgroundColor = '#F9F9F9'

class Register extends Component {
    state = {
        id : '',
        pw : '', 
        email : '',
        message : ''
    }

    componentDidMount = () => {
        document.body.style.backgroundColor = BodyBackgroundColor
        document.body.style.height = '100vh'
        // document.body.style.width = '100vh'
        document.body.style.paddingTop ='60px'
    }

    componentWillUnmount = () => {
        document.body.style.paddingTop ='0px'
    }

    //deprecated 된다함
    componentWillMount = () => {
        
    }
    
    handleOnClickCancel = (e) => {
        this.props.history.push(URL_LOGIN)
    }

    handleOnClickReg = () => {
        let user = new Model.UserModel()
        user.id = this.state.id
        user.pw = this.state.pw
        user.email = this.state.email
        user.message = this.state.email

        fire.reg(user)
        this.props.history.push(URL_LOGIN)
        alert(`가입성공`)
    }

    handleOnChangeID = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    handleOnChangePw = (e) => {
        this.setState({
            pw : e.target.value
        })
    }

    handleOnChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    handleOnChangeMsg = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    render() {
        return (
            <div style={REG_STYLE}>
                <div className="field">
                    <label className="label">ID</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" onChange={this.handleOnChangeID}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Text input" onChange={this.handleOnChangePw}/>
                        {/**<input className="input is-success" type="text" placeholder="Text input" value="bulma"/> */}
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    {/* <p class="help is-success">This username is available</p> */}
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email input" onChange={this.handleOnChangeEmail}/>
                        {/**<input className="input is-danger" type="email" placeholder="Email input"/> */}
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>

                {/* <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div> */}

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea" onChange={this.handleOnChangeMsg}></textarea>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" />
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>

                {/* <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" />
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" />
                            No
                        </label>
                    </div>
                </div> */}

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.handleOnClickReg}>Submit</button>
                    </div>
                    <div className="control" onClick={this.handleOnClickCancel}>
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {

};

export default Register;