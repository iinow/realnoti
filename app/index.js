import React from 'react'
import ReactDOM from 'react-dom'
import Root from './src/renderer/Root';
import { Fire } from './src/util/Firebase'

Fire.Instance
ReactDOM.render(<Root/>, document.getElementById('root'))