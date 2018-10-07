import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div>
                <button className="button is-primary" onClick={
                    (e)=>alert('클릭'+e.target.value)
                }>하인</button>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;