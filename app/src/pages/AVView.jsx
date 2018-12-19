import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AVView extends Component {
    render() {
        return (
            <div style={{margin: '30px'}}>
                Hello     
            </div>
        );
    }
}

AVView.propTypes = {

};

export default withRouter(AVView)