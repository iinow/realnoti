import React, { Component } from 'react'
import PropTypes from 'prop-types'

const UploadButton = ({ select }) => (
    <div>
        <div className="file">
            <label className="file-label">
                <input className="file-input" type="file" name="resume" onChange={select} multiple/>
                <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </div>
)

UploadButton.propTypes = {

};

export default UploadButton;