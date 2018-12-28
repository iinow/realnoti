import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Avitem extends Component {
    render() {
        return (
            <span style={{backgroundColor: '#88888888', padding: '10px', float: 'left'}}>
                <div style={{padding: '10px'}}>
                    <img style={{ width: "200px", height: "250px", backgroundColor: "#FF0000" }} />
                </div>
                <label style={{textAlign: 'center'}}>DVSD-392</label>
            </span>
        );
    }
}

Avitem.propTypes = {

};

export default Avitem