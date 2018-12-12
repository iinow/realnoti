import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { default as styles } from 'bulma/css/bulma.css'
import Api from '../util/Api'

// let arr = ['Settings', 'Sign out']
// let ham = arr.map(v=>{
//         return <span>${v}</span>
//     })

class Home extends Component {
    state = {
        url: '',
        param: '',
        res: '',
        click: false
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

    handleTestOnClick = () => {
        this.setState({
            'click': !this.state.click
        })
        console.log(`클릭 ${this.state.click}`)
    }
    render() {
        return (
            <div>
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
                                    {/* <div className={this.state.click ? 'navbar-item has-dropdown is-active' : 'navbar-item has-dropdown'} onClick={this.handleTestOnClick}> */}
                                    <div className={'is-hoverable'} onClick={this.handleTestOnClick}>
                                        <a className="navbar-item has-dropdown is-hoverable">
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
                                            <hr className="navbar-divider" />
                                            <div className="navbar-item">
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="columns" id="mail-app">
                        <aside className="column is-2 aside hero is-fullheight">
                            <div>
                                <div className="compose has-text-centered">
                                    <a className="button is-danger is-block is-bold">
                                        <span className="compose">Compose</span>
                                    </a>
                                </div>
                                <div className="main">
                                    <a href="#" className="item active"><span className="icon"><i className="fa fa-inbox"></i></span><span className="name">Inbox</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-star"></i></span><span className="name">Starred</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-envelope-o"></i></span><span className="name">Sent Mail</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
                                </div>
                            </div>
                        </aside>

                        <div className="column is-4 messages hero is-fullheight" id="message-feed">
                            <div className="action-buttons">
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-chevron-down"></i></a>
                                    <a className="button is-small"><i className="fa fa-refresh"></i></a>
                                </div>
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-inbox"></i></a>
                                    <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                    <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                                </div>
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-folder"></i></a>
                                    <a className="button is-small"><i className="fa fa-tag"></i></a>
                                </div>
                                <div className="control is-grouped pg">
                                    <div className="title">???머지</div>
                                    <a className="button is-link"><i className="fa fa-chevron-left"></i></a>
                                    <a className="button is-link"><i className="fa fa-chevron-right"></i></a>
                                </div>
                            </div>

                            <div className="inbox-messages" id="inbox-messages">
                                <div v-for="(msg, index) in messages" className="card" id="'msg-card-'+index" click="showMessage(msg,index)" data-preview-id="index">
                                    <div className="card-content">
                                        <div className="msg-header">
                                            <span className="msg-from"><small>from : ???</small></span>
                                            <span className="msg-timestamp"></span>
                                            <span className="msg-attachment"><i className="fa fa-paperclip"></i></span>
                                        </div>
                                        <div className="msg-subject">
                                            <span className="msg-subject"><strong id="fake-subject-1">subject</strong></span>
                                        </div>
                                        <div className="msg-snippet">
                                            <p id="fake-snippet-1">snippet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column is-6 message hero is-fullheight is-hidden" id="message-pane">
                            <div className="action-buttons">
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-inbox"></i></a>
                                    <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                    <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                                </div>
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-exclamation-circle"></i></a>
                                    <a className="button is-small"><i className="fa fa-trash-o"></i></a>
                                </div>
                                <div className="control is-grouped">
                                    <a className="button is-small"><i className="fa fa-folder"></i></a>
                                    <a className="button is-small"><i className="fa fa-tag"></i></a>
                                </div>
                            </div>
                            <div className="box message-preview">
                                <div className="top">
                                    <div className="avatar">
                                        <img src="https://placehold.it/128x128" />
                                    </div>
                                    <div className="address">
                                        <div className="name">John Smith</div>
                                        <div className="email">someone@gmail.com</div>
                                    </div>
                                    <hr />
                                    <div className="content">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </p>
                            <p>
                                <a className="icon" href="https://github.com/dansup/bulma-templates">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;