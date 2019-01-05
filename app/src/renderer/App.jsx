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

// import TitleBar from 'electron-titlebar'
//import menu from './AppMenu'
// import {slackTemplate} from './title'
const App = () => (
    //    document.body.style.overflow='hidden'
    <div>
        <div style={{ height: "30px" }}>
            <TitleBar
                // icon={signalIcon}
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
        {/* <TitleBar
            icon={`${__dirname}/../../../public/favicon.ico`}
            app='Electron'
            menu={defaultTemplate}
        /> */}
        {/* <div>
                Hello Main
                <Link to="/">login고고</Link>
            </div> */}
        {/* <Switch> */}
        <Route exact path={URL.URL_LOGIN} component={PAGE.Login} />
        <Route path={URL.URL_HOME} component={PAGE.Home} />
        <Route exact path={URL.URL_REG} component={PAGE.Register} />
        {/* </Switch> */}
    </div>
)

// if(!location.hash.length){
//     location.hash = '/'
// }

App.propTypes = {

};

export default App;
