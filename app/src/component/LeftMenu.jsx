import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { URL_HOME_RESTAPI } from '../util/constant';

const LeftMenu = ({ item = [{ menuname, link, path }], title = "", imgPath = "", history }) => (
    <aside className="column is-2 aside hero is-fullheight">
        <div>
            <div className="compose has-text-centered">
                <a className="button is-danger is-block is-bold">
                    <span className="compose">
                        {/* <div>{title}</div> */}
                        <img src={imgPath} width="50px" height="50px"/>
                    </span>
                </a>
            </div>
            <div className="main">
                {
                    item.map(({menuname, link, path}, idx) => {
                        return (
                            <a className="item" key={idx} onClick={()=>{
                                // console.log(history.location.pathname)
                                link()
                            }}>
                                <span className="icon">
                                    <i className="fa fa-inbox"></i>
                                </span>
                                <span className="name">
                                    {menuname}
                                </span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </aside>
)

// LeftMenu.propTypes = {   href={link} 

// }
export default LeftMenu;