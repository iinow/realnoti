import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {default as styles} from 'bulma/css/bulma.css'

class Home extends Component {
    state = {
        url: '',
        param: '',
        res: ''
    }

    handleURLChange = (e) => {
        const v = e.target.value
        this.setState({ url: v })
    }

    handlePostClick = async (e) => {
        const v = await Api.post(this.state.url, {
            "userid":"ems@wooam.com",
            "password":"1111"
        })
        console.log(v.data)
        this.setState({ res: JSON.stringify(v.data) })
        
        alert(this.state.url)
    }
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