import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '.';

const List = ({ item = [{ subject, content, addr }], listname }) => {
    return (
        <div style={{ width: "80%" }}>
            <div className="content is-medium">
                <h3 className="title is-3">{listname}</h3>
                {
                    item.map((item = { subject, content, addr }, idx) => {
                        return (
                            <ListItem subject={item.subject} content={item.content} addr={item.addr} key={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List;