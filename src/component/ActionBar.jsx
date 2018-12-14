import React, { Component } from 'react'
import TitleBar from 'electron-titlebar';
// import 'electron-react-titlebar/assets/style.css'
import PropTypes from 'prop-types'

class ActionBar extends Component {
    render() {
        return (
            <div className="ExampleContainer">
            {`${!TitleBar} 여기바라`}
                {/* <TitleBar
                /> */}
                dfdfdfdfd
            </div>
        );
    }
}

ActionBar.propTypes = {

};

export default ActionBar;