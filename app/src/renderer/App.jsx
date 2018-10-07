import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div>
                <button className="button is-primary" onClick={
                    (e)=>alert('ddfdsds')
                }>하인</button>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;