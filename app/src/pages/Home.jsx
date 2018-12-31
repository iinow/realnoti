import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LeftMenu, UploadButton } from '../component';
import * as URL from '../util/constant';
import * as PAGE from './index'
import { List } from '.';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import leftmenujson from '../data/MenuItem.json'

const { remote } = window.require('electron')
class Home extends Component {
    state = {
        url: '',
        param: '',
        res: '',
        click: false,
        cmd: '',
        res: ''
        //file: ''
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
            <div id="wrapper" className="toggled">
                <LeftMenu
                    props={this.props}
                    item={
                        leftmenujson
                    }
                    title="시작이당"
                    imgPath={'file://' + remote.app.getAppPath() + '/app/resource/moe.PNG'} />

                <div id="page-content-wrapper">
                    <Route exact path={`${this.props.match.url}${URL.URL_HOME_RESTAPI}`} component={PAGE.RestApi} />
                    <Route exact path={`${this.props.match.url}${URL.URL_HOME_AVVIEW}`} component={PAGE.AVView} />
                </div>
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