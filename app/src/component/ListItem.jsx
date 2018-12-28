import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({subject, content, addr}) => (
    <div className="box">
        <h4 className="title is-3">{subject}</h4>
        <article className="message is-primary">
            {/* <span className="icon has-text-primary">
                <i className="fab fa-js">
                </i>
            </span> */}
            <div className="message-body">
                {content}
            </div>
        </article>
        <pre className="language-javascript">
            <code className="language-javascript">
                {addr}
            </code>
        </pre>
    </div>
)

export default ListItem;