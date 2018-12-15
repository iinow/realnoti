import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { default as styles } from 'bulma/css/bulma.css'
import Api from '../util/Api'
const SSH = window.require('simple-ssh')
// let arr = ['Settings', 'Sign out']
// let ham = arr.map(v=>{
//         return <span>${v}</span>
//     })
let ssh
class Home extends Component {
    state = {
        url: '',
        param: '',
        res: '',
        click: false,
        cmd: '',
        res: ''
    }

    handleURLChange = (e) => {
        const v = e.target.value
        this.setState({ url: v })
    }

    handlePostClick = async (e) => {
        // const v = await Api.post(this.state.url, {
        //     "userid": "ems@wooam.com",
        //     "password": "1111"
        // })
        // console.log(v.data)
        // this.setState({ res: JSON.stringify(v.data) })

        // alert(this.state.url)
    }

    handleTestOnClick = () => {
        this.setState({
            'click': !this.state.click
        })
        console.log(`클릭 ${this.state.click}`)
    }

    handleCmdOnChange = (e) => {
        this.setState({
            cmd : e.target.value
        })
    }

    handleCmdOnClick = async () => {
        if(!ssh){
            ssh = await new SSH({
                host: '192.168.167.11',
                user: 'pi',
                pass: 'qweqweqwe2'
            })
        }
        await ssh.exec(this.state.cmd, {
            out: (str) => {
                this.setState({
                    res: str
                })
                console.log(str)
            }
        })
        // .start().reset()
    }

    render() {
        return (
            <div>
                <input onChange={this.handleCmdOnChange} type="text" onKeyPress={(e)=>{
                    if(e=='Enter'){
                        this.handleCmdOnClick
                    }}
                }></input>
                <button onClick={this.handleCmdOnClick}>전송!!</button>
                <div>{this.state.res}</div>
            </div>
        );
    }
}

Home.propTypes = {
    url: '',
    param: '',
    res: '',
    click: false,
    cmd: ''
};

export default Home;