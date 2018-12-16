import React, { Component } from 'react'
import PropTypes from 'prop-types'

const LeftMenu = ({ item = [{ name, link }], title = "", imgPath = "" }) => (
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
                    item.map(({name, link}, idx) => {
                        return (
                            <a className="item" onClick={link} key={idx}>
                                <span className="icon">
                                    <i className="fa fa-inbox"></i>
                                </span>
                                <span className="name">
                                    {name}
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