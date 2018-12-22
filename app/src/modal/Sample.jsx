import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal'

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
        showModal: false
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

    render() {
        return (
            <ReactModal
                style={STYLE}
                parentSelector={this.getParent}
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}>
                <p>Modal text!</p>
                <button onClick={this.handleCloseModal}>Close Modal!!</button>
            </ReactModal>
        );
    }
}

Sample.propTypes = {
    // onRef: PropTypes.any.isRequired
};
export default Sample