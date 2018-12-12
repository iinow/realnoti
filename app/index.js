import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/renderer/App';
import { fire } from './src/util/Firebase'

fire.init()

ReactDOM.render(<App/>, document.getElementById('root'))