import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {default as styles} from 'bulma/css/bulma.css'

class Home extends Component {
    render() {
        return (
            <div>
                <button className={styles.button} type="button">login</button>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;