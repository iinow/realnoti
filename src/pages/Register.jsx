import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { URL_LOGIN } from '../util/constant'

const REG_STYLE = {
    margin: "10px auto",
    padding: 30,
    minWidth: 100,
    maxWidth: 500,
    backgroundColor: '#FFFFFF'
    
    // textAlign: 'center'
    // width: 300,
    // border: "1px solid #D7DDE1",
    // borderRadius: "7px",
    // backgroundColor: "white"
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: "auto",
    // marginBottom: "auto"
    // margin-left:auto,
    // margin-right:auto;
    // backgroundColor: "red"
}
const BodyBackgroundColor = '#F9F9F9'

class Register extends Component {

    componentWillMount = () => {
        document.body.style.backgroundColor = BodyBackgroundColor
        document.body.style.height = '100vh'
        // document.body.style.width = '100vh'
    }
    
    handleOnClickCancel = (e) => {
        this.props.history.push(URL_LOGIN)
    }

    render() {
        return (
            <div style={REG_STYLE}>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                    <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field">
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" />
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>

                <div class="field">
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
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control" onClick={this.handleOnClickCancel}>
                        <button class="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {

};

export default Register;