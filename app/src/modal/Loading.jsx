import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import BaseModal from './BaseModal'

const { remote } = window.require('electron')

const STYLE = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        height: 'auto',  // set height
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        //border: '1px solid #ccc',
        background: '#00000000',
        right: 'auto',
        top: '35%', // start from center
        transform: 'translate(-50%,-' + '100px' + ')', // adjust top "up" based on height
        width: 'auto',
        maxWidth: '40rem'
    }
}

class Loading extends BaseModal {
    render() {
        return (
            <ReactModal
                style={STYLE}
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}>
                <img src={'file://' + remote.app.getAppPath() + '/app/resource/moe.PNG'} width="50px" height="50px" className="App-logo"/>
            </ReactModal>
        );
    }
}

Loading.propTypes = {

};

export default Loading