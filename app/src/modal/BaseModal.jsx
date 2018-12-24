import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

class BaseModal extends Component {
    
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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

BaseModal.propTypes = {

}

export default BaseModal