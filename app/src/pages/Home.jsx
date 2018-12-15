import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { default as styles } from 'bulma/css/bulma.css'
import Api from '../util/Api'
import { LeftMenu } from '../component';
import { URL_HOME } from '../util/constant';

class Home extends Component {
    state = {
        url: '',
        param: '',
        res: '',
        click: false,
        cmd: '',
        res: ''
    }

    componentDidMount = () => {
        document.body.czShortcutListen=true
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
        
    }

    render() {
        return (
            <div className="columns">
                {/* <input onChange={this.handleCmdOnChange} type="text" onKeyPress={(e)=>{
                    if(e=='Enter'){
                        this.handleCmdOnClick
                    }}
                }></input>
                <button onClick={this.handleCmdOnClick}>전송!!</button>
                <div>{this.state.res}</div> */}
                <LeftMenu 
                    item={[
                        {name : "Home", link : ()=> {this.props.history.push(URL_HOME)}}, 
                        {name : "둘번", link : ()=> {this.props.history.push(URL_HOME)}}
                    ]} 
                    title="시작이당">
                </LeftMenu>
            </div>
        );
    }
}

Home.propTypes = {
    
};

export default Home;