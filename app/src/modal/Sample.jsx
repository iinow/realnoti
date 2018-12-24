import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal'
import { fire } from '../util/Firebase'

// ReactModal.setAppElement('#root')

const STYLE = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        height: '300px',  // set height
        left: '50%',
        padding: '2rem',
        position: 'fixed',
        border: '1px solid #ccc',
        background: '#fff',
        right: 'auto',
        top: '35%', // start from center
        transform: 'translate(-50%,-' + '100px' + ')', // adjust top "up" based on height
        width: '700px',
        maxWidth: '40rem'
    }
}

ReactModal.setAppElement('#root')

class Sample extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        showModal: false,
        title: '',
        content: '',
        addr: ''
    }

    handleOpenModal = () => {
        this.setState({
            showModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    getParent = () => {
        return document.querySelector('#root')
    }

    handleTitleOnChange = (e) => {
        this.setState({
            'title': e.target.value
        })
    }

    handleContentOnChange = (e) => {
        this.setState({
            'content': e.target.value
        })
    }

    handleAddrOnChange = (e) => {
        this.setState({
            'addr': e.target.value
        })
    }

    handleAddItemClick = () => {
        let res = fire.insert_RestApi_Item(
            this.state.title,
            this.state.content,
            this.state.addr)
        console.log(`성공 여부 : ${res}`)
        console.log(res)
        this.handleCloseModal()
    }

    handleGetItemOnClick = async () => {
        let res =  await fire.get_ApiItemModel()
        // res.docs.forEach((data, index)=>{
        //     console.log(`${index}번재 ${data.data()}`)
        // })
        console.log(res)
    }

    render() {
        return (
            <ReactModal
                style={STYLE}
                parentSelector={this.getParent}
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}>
                <div>
                    <span>
                        <label>title: </label><input className='input' type='text' onChange={this.handleTitleOnChange}></input>
                    </span>
                    <span>
                        <label>content: </label><input className='input' type='text' onChange={this.handleContentOnChange}></input>
                    </span>
                    <span>
                        <label>addr: </label><input className='input' type='text' onChange={this.handleAddrOnChange}></input>
                    </span>
                    <span>
                        <button className='button' onClick={this.handleAddItemClick}>아이템 추가!!</button>
                        <button className='button' onClick={this.handleCloseModal}>Close Modal!!</button>
                        <button className='button' onClick={this.handleGetItemOnClick}>데이터 가져오기</button>
                    </span>
                </div>
            </ReactModal>
        );
    }
}

Sample.propTypes = {
    // onRef: PropTypes.any.isRequired
};
export default Sample