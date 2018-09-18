import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'

injectGlobal`
 body {
  align-items: center;
  background: #f7f7f7;
  display: flex;
  font-family: sans-serif; 
  justify-content: center;
  padding-left: 25px; 
  padding-right: 25px; 
 }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
