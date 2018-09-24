import React, { Component } from 'react'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ImageScreenContainer from '../containers/ImageScreenContainer'
import DetailScreenContainer from '../containers/DetailScreenContainer'
import InfoScreen from './screen/InfoScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={InfoScreen} />
            <Route path="/nids" component={ImageScreenContainer} />
            <Route path="/detail/:id" component={DetailScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
