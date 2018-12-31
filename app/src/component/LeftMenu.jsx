import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { URL_HOME_RESTAPI, URL } from '../util/constant'

const LeftMenu = ({ item = [{ menuname, link, path }], title = "", imgPath = "" , props}) => (
    <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a>
                    Start Viewer
                </a>
            </li>
            {
                item.map(({ menuname, link }, idx) => {
                    return (
                        <li className="sidebar-item" key={idx}>
                            <a key={idx} onClick={() => {
                                // link()
                                props.history.push(`${props.match.url}${URL.find(link)}`)
                            }}>
                                {menuname}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)

// LeftMenu.propTypes = {   href={link} 

// }
export default LeftMenu;