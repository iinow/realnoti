import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import App from './src/renderer/App'

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Root;