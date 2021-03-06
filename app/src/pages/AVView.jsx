import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal'
import { Sample, Loading } from '../modal/index';
import { Avitem } from '../component/index';
import { Api } from '../util/ApiService'
import * as craw from '../crawler/AvCraw'

const electron = require('electron')
const remote = electron.remote
// import * as noti from 'node-notifier'
let noti = window.require('node-notifier')
import { Noti } from '../notification/Noti'
// const { BrowserWindow } = require('electron').remote

class AVView extends Component {
    handleNewItemClick = () => {
        this.mo.handleOpenModal()
    }

    handleTestOnClick = () => {
        Noti.instance.noti()
        // noti.notify({
        //     title: "Title!!",
        //     message: "Hello, There!!"
        // })
    }

    render() {
        return (
            <div className="container-fluid">
                <Loading ref={ref => this.mo = ref} />
                <button className="button" onClick={()=>{
                    console.log(`사이즈 : ${remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()}`)
                    console.log(remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds())
                }}>현재 사이즈</button>
                <button className="button" onClick={this.handleTestOnClick}>노티</button>
                <button className="btn btn-secondary" id="menu-toggle" onClick={()=>{
                    const c = craw.AvCraw.instance
                    console.log(c.content())
                }}>노티</button>
                <div>
                    <Avitem />
                    <Avitem />
                    <Avitem />
                    <Avitem />
                </div>
            </div>
        );
    }
}

AVView.propTypes = {

};

export default withRouter(AVView)