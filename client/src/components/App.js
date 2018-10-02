import React, { Component } from 'react'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ImageScreenContainer from '../containers/ImageScreenContainer'
import DetailScreenContainer from '../containers/DetailScreenContainer'
import InfoScreen from './screen/InfoScreen'
import FilterScreen from './screen/FilterScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import thunk from 'redux-thunk'
// import { saveToLocalStorage } from '../middleware'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={InfoScreen} />
            <Route path="/nids" component={ImageScreenContainer} />
            <Route path="/detail" component={DetailScreenContainer} />
            <Route path="/filter" component={FilterScreen} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
