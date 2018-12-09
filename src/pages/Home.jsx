import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as styles } from 'bulma/css/bulma.css'
import Api from '../util/Api'

// let arr = ['Settings', 'Sign out']
// let ham = arr.map(v=>{
//         return <span>${v}</span>
//     })

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
        // const v = await Api.post(this.state.url, {
        //     "userid": "ems@wooam.com",
        //     "password": "1111"
        // })
        // console.log(v.data)
        // this.setState({ res: JSON.stringify(v.data) })

        // alert(this.state.url)
    }
    render() {
        return (
            <div>
                <nav className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="../">
                                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
                            </a>

                            <div className="navbar-burger burger" data-target="navMenu">
                                {/* <span></span> */}
                                <span>Settings</span>
                                <span>Sign out</span>
                            </div>
                        </div>

                        <div id="navMenu" className="navbar-menu">
                            <div className="navbar-end">
                            {/**is-active 를 가려주면 된당 */}
                                <div className="navbar-item has-dropdown is-active">
                                    <a className="navbar-link">
                                        Account
                                    </a>

                                    <div className="navbar-dropdown" >
                                        <a className="navbar-item">
                                            Dashboard
                                        </a>
                                        <a className="navbar-item">
                                            Profile
                                        </a>
                                        <a className="navbar-item">
                                            Settings
                                        </a>
                                        <hr className="navbar-divider"/>
                                        <div className="navbar-item">
                                            Logout
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <nav class="navbar has-shadow">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
                            </a>

                            <div class="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div id="navMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class="navbar-item has-dropdown is-active">
                                    <a class="navbar-link">
                                        Account
                            </a>

                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                                            Dashboard
                                </a>
                                        <a class="navbar-item">
                                            Profile
                                </a>
                                        <a class="navbar-item">
                                            Settings
                                </a>
                                        <hr class="navbar-divider">
                                            <div class="navbar-item">
                                                Logout
                                </div>
                                        </hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;