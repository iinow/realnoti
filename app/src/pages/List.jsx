import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '../component';

class List extends Component {
    constructor(props) {
        super(props)
    }
    // state = {

    // }

    render() {
        return (
            // <div style={{width:"80%"}}>
                <div className="content is-medium">
                    <h3 className="title is-3">{this.props.name}</h3>
                    {
                        this.props.item.map((item = { subject, content, addr }, idx) => {
                            return (
                                <ListItem subject={item.subject} content={item.content} addr={item.addr} key={idx} />
                            )
                        })
                    }
                </div>
            // </div>
        );
    }
}

// List.propTypes = {
//     name: '',
//     item: [{subject, content, addr}]
// };

export default List;