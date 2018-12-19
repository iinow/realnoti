import React from 'react'
import ReactDOM from 'react-dom'
import Root from './src/renderer/Root';
import { fire } from './src/util/Firebase'

fire.init()

ReactDOM.render(<Root/>, document.getElementById('root'))