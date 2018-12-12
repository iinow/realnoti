import React, { Component } from 'react'
import {
    Route,
    Link,
    Switch,
    Redirect,
    // BrowserRouter as Router2, 사용하지 않음 요즘엔
    HashRouter as Router
} from 'react-router-dom'
import { Login, Home, Register } from '../pages/index'
import PropTypes from 'prop-types'
import { URL_LOGIN, URL_HOME, URL_REG } from '../util/constant'
// import TitleBar from 'electron-titlebar'
//import menu from './AppMenu'
// import {slackTemplate} from './title'

const App = () => (
    <div>
        {/* <TitleBar
            icon={`${__dirname}/../../../public/favicon.ico`}
            app='Electron'
            menu={defaultTemplate}
        /> */}
        <Router>
            {/* <div>
                Hello Main
                <Link to="/">login고고</Link>
            </div> */}
            <Switch>
                <Route exact path={URL_LOGIN} component={Login} />
                <Route exact path={URL_HOME} component={Home} />
                <Route exact path={URL_REG} component={Register} />
            </Switch>
        </Router>
    </div>
)

// if(!location.hash.length){
//     location.hash = '/'
// }

App.propTypes = {

};

export default App;
