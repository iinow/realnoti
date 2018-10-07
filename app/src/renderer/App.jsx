import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Login, Home } from '../pages/index'
import PropTypes from 'prop-types'

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </div>
    )
}

App.propTypes = {

};

export default App;