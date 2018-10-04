import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'

injectGlobal`
 body {
  background: #f7f7f7;
  padding-left: 25px; 
  padding-right: 25px; 
  font-family: 'Roboto Mono';
  font-weight: 700;
  color: #fc4955;
 }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
