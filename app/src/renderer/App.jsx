import React, { Component } from 'react'
import {
    Route,
    Link,
    Switch,
    Redirect,
    BrowserRouter as Router2, //사용하지 않음 요즘엔
    HashRouter as Router
} from 'react-router-dom'
import * as PAGE from '../pages/index'
import PropTypes from 'prop-types'
import * as URL from '../util/constant'
import TitleBar from 'frameless-titlebar'
import { defaultTemplate } from '../titlebar/menu'

const App = () => (
    <div>
        <div style={{ height: "30px" }}>
            <TitleBar
                app="Signal"
                menu={defaultTemplate}
                theme={{
                    barTheme: 'dark',
                    barBackgroundColor: '#2090ea',
                    menuHighlightColor: '#2090ea',
                    barShowBorder: true,
                    barBorderBottom: '1px solid #1a70b7',
                    menuDimItems: false
                }}
            />
        </div>
        <Route exact path={URL.URL_LOGIN} component={PAGE.Login} />
        <Route path={URL.URL_HOME} component={PAGE.Home} />
        <Route exact path={URL.URL_REG} component={PAGE.Register} />
    </div>
)

App.propTypes = {

};

export default App;
