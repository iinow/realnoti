import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Avitem extends Component {
    render() {
        return (
            <span style={{ padding: '10px', float: 'left' }}>
                <div className="border border-primary" style={{padding:'5px'}}>
                    <img style={{ width: "200px", height: "250px", backgroundColor: "#FF0000" }} />
                    <div style={{ padding: '10px', width: '100%', textAlign: 'center' }}>
                        DVSD-392
                    </div>
                </div>
            </span>
        );
    }
}

Avitem.propTypes = {

};

export default Avitem