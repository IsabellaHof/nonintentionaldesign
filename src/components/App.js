import React, { Component } from 'react'

import reducer from '../reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ImageScreen from './screen/ImageScreen.js'
import DetailScreenContainer from '../containers/DetailScreenContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={ImageScreen} />
            <Route path="/detail" component={DetailScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
