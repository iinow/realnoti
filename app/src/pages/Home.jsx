import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { default as styles } from 'bulma/css/bulma.css'
import Api from '../util/Api'
import { LeftMenu, UploadButton } from '../component';
import * as URL from '../util/constant';
import * as PAGE from './index'
import { List } from '.';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

const { remote } = window.require('electron')

class Home extends Component {
    state = {
        url: '',
        param: '',
        res: '',
        click: false,
        cmd: '',
        res: '',
        file: ''
    }

    componentDidMount = () => {
        document.body.czShortcutListen = true
        console.log(this.props.history.location.pathname)
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
            cmd: e.target.value
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
                        {
                            menuname: "Rest API", link: () => {
                                // alert('Rest API 버튼 클릭')
                                this.props.history.push(`${this.props.match.url}${URL.URL_HOME_RESTAPI}`)
                                // console.log(this.props.history.location.pathname)
                            },
                            path: `${this.props.match.url}${URL.URL_HOME_RESTAPI}`
                        },
                        {
                            menuname: "둘번", link: () => {
                                // alert(`둘번 클릭 ${remote.app.getAppPath()}`)
                                this.props.history.push(`${this.props.match.url}${URL.URL_HOME_AVVIEW}`)
                                // console.log(this.props.history.location.pathname)
                            },
                            path: `${this.props.match.url}${URL.URL_HOME_AVVIEW}`
                        }
                    ]}
                    title="시작이당"
                    imgPath={'file://' + remote.app.getAppPath() + '/app/resource/moe.PNG'} />
                {/* <button style={{right:"auto"}}>(+)</button> */}
                <Route exact path={`${this.props.match.url}${URL.URL_HOME_RESTAPI}`} component={PAGE.RestApi} />
                <Route exact path={`${this.props.match.url}${URL.URL_HOME_AVVIEW}`} component={PAGE.AVView} />
                {/* <div style={{ margin: '30px' }}>
                    Hello ???
                    <UploadButton select={(e)=>{
                        this.setState({
                            file: Array.from(e.target.files).map((file)=>{
                                return `${file.name}`
                            })
                        }) 
                        // this.props.onSubmit()
                    }}/>
                    <br/>
                    {(this.state.file)}
                    <List name="Rest API 테스트 간다!dfdfdfdfdfdfdfd"
                        item={[
                            { subject: "1번째 제목", content: "내용 간드아아", addr: "http://www.naver.com" },
                            { subject: "2번째 제목", content: "후ㅡ", addr: "http://www.naver.com" }
                        ]} />
                    </div>*/}
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;