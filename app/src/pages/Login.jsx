import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, HashRouter } from 'react-router-dom'
import { URL_HOME, URL_REG } from '../util/constant'
import { Fire } from '../util/Firebase'

// const SSH = window.require('simple-ssh')
let sqlite3 = window.require('sqlite3').verbose()
// import { remote } from 'electron'
// const SSH = remote.require('simple-ssh')

const BodyBackgroundColor = '#F9F9F9'
const FORM_STYLE = {
    margin: "0 auto",
    padding: 30,
    width: 300,
    border: "1px solid #D7DDE1",
    borderRadius: "7px",
    backgroundColor: "#FFFFFF"
    // marginLeft: "auto",
    // marginRight: "auto",
    // marginTop: "auto",
    // marginBottom: "auto"
    // margin-left:auto,
    // margin-right:auto;
    // backgroundColor: "red"
}

const style2 = <style>
    hero is-success is-fullheight{{ backgroundColor: '#000000' }}
</style>

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

    componentDidMount = () => {
        document.body.style.backgroundColor = BodyBackgroundColor
        document.body.style.height = '100vh'
        // document.body.style.paddingTop = '60px'
        // document.body.style.width = '100vh'

        const id = localStorage.getItem("id")
        const pw = localStorage.getItem("pw")

        if (id && pw) {
            this.setState({
                'id': id,
                'pw': pw
            })
        }
        
        // const sqlite3 = require('sqlite3').verbose()
        const db = new sqlite3.Database('./database.sqlite3')
        db.serialize(()=>{
            db.each("SELECT rowid AS id, info FROM lorem", (err, row)=>{
                console.log(`${row.id} : ${row.info}`)
            })
        })
        db.close()
        console.log(this.props.history.location.pathname)
    }

    componentWillUnmount = async () => {
        document.body.style.paddingTop = '0px'
        document.body.style.backgroundColor = '#FFFFFF'
    }

    handleIdChange = (e) => {
        const v = e.target.value
        this.setState({ id: v })
    }

    handlePwChange = (e) => {
        const v = e.target.value
        this.setState({ pw: v })
    }

    handleLoginOnClick = async (e) => {
        const { id, pw } = this.state
        if (id === '' || pw === '') {
            // alert('클릭22' + this.state.id + ', ' + this.state.pw)
            // this.etxId.focus()
            alert(`id, pw 입력 바람`)
        } else {
            if (await Fire.Instance.login(id, pw)) {
                localStorage.setItem("id", id)
                localStorage.setItem("pw", pw)
                this.setState({
                    id: '',
                    pw: ''
                })
                this.props.history.push(URL_HOME)
            } else {
                console.log(`로그인 실패`)
            }
        }
    }

    handleRegister = (e) => {
        this.props.history.push(URL_REG)
    }

    render() {
        return (
            <div style={FORM_STYLE}>
                <div className="field">
                    <label className="label">아이디</label>
                    <div className="control">
                        <input className="input" type="text" placeholder=""
                            value={this.state.id}
                            onChange={this.handleIdChange}
                            ref={(ref) => this.etxId = ref} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">비밀번호</label>
                    <div className="control">
                        <input className="input" type="password" placeholder=""
                            value={this.state.pw}
                            onChange={this.handlePwChange}
                            onKeyPress={(e) => {
                                if (e.key == 'Enter') {
                                    this.handleLoginOnClick()
                                }
                            }} />
                    </div>
                </div>

                <div className="field">
                    {/* type=submit default 값인데 자동 리로드가 된다 form 안에 있는 button 이라면  */}
                    <button className="button" type="button" onClick={this.handleLoginOnClick}>login</button>
                    <button className="button" style={{ float: "right" }} onClick={this.handleRegister}>새 등록</button>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;
