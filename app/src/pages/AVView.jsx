import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal'

import { Sample, Loading } from '../modal/index';

class AVView extends Component {
    handleNewItemClick = () => {
        this.mo.handleOpenModal()
    }

    render() {
        return (
            <div style={{ margin: '30px' }}>
                <Loading ref={ref=>this.mo = ref}/>
                <button className="button" onClick={this.handleNewItemClick}> 모달 UP </button>
            </div>
        );
    }
}

AVView.propTypes = {

};

export default withRouter(AVView)