import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '.';

const List = ({ item = [{ title, content, addr }], listname }) => {
    return (
        <div style={{ width: "80%" }}>
            <div className="content is-medium">
                <h3 className="title is-3">{listname}</h3>
                {
                    item?item.map((item = { title, content, addr }, idx) => {
                        return (
                            <ListItem subject={item.title} content={item.content} addr={item.addr} key={idx} />
                        )
                    }):undefined
                }
            </div>
        </div>
    )
}

export default List;