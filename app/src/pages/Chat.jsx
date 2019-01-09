import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Fire } from '../util/Firebase'

class Chat extends Component {
    messages
    mykey
    state = {
        msg: ''
    }

    componentDidMount = async () => {
        let rooms = Fire.Instance.realDB.ref(`chatrooms`)
        await rooms.on('value', (snap)=>{
            snap.forEach(item=>{
                const {id} = item.val()
                if(id == localStorage.getItem('id')){
                    this.mykey = item.key
                    console.log(item.key)
                }
            })
        })

        let mess = Fire.Instance.realDB.ref(`chatrooms/${this.mykey}`)
        await mess.on('value', snap=>{
            snap.forEach(item=>{
                console.log(item.val())
            })
        })
    }

    ///${localStorage.getItem(`id`)}
    handleNewChatOnClick = () => {
        let rooms = Fire.Instance.realDB.ref(`chatrooms`).push()
        rooms.update({
            id: localStorage.getItem('id'),
            messages: []
        })
        // rooms.key
        this.messages = rooms.child("messages")

        // rooms.on("child_added", item=>{

        // })
    }

    handleChatOnSubmit = () => {

    }

    handleSendMessageOnClick = () => {
        this.messages.push({ 
            id: localStorage.getItem('id'), 
            msg: this.state.msg 
        })
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
                    <input className='input' onChange={this.handleMessageOnChange} />
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