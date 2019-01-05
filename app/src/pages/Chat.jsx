import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Fire } from '../util/Firebase'

class Chat extends Component {
    
    state = {
        msg: ''
    }

    handleNewChatOnClick = () => {
        let rooms = Fire.Instance.realDB.ref('chatrooms').push()
        rooms.update({
            msg: "Hi Hello world"
        })
        rooms.key
    }

    handleChatOnSubmit = () => {
        
    }

    handleSendMessageOnClick = () => {
        
        
        // Fire.Instance.realDB.ref().once()
    }

    handleMessageOnChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <input onChange={this.handleMessageOnChange} />
                    <button className="button" style={{ marginLeft: '5px' }} onClick={this.handleSendMessageOnClick}>전송</button>
                    <button className="button" style={{ marginLeft: '5px' }} onClick={this.handleNewChatOnClick}>채팅방 새로</button>
                </div>
            </div>
        );
    }
}

Chat.propTypes = {

};

export default Chat