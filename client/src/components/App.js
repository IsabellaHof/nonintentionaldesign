import React, { Component } from 'react'
import reducer from '../reducer'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import ImageScreenContainer from '../containers/ImageScreenContainer'
import DetailScreenContainer from '../containers/DetailScreenContainer'
import InfoScreen from './screen/InfoScreen'
import UploadScreenContainer from '../containers/UploadScreenContainer'
import UploadDetailScreen from './screen/UploadDetailScreen'
import StartAnimation from './screen/StartAnimation'
import FilterScreenContainer from '../containers/FilterScreenContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { saveToLocalStorage } from '../middleware'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage, thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={InfoScreen} />
            <Route path="/nids" component={ImageScreenContainer} />
            <Route path="/finds/:id" component={DetailScreenContainer} />
            <Route path="/filter" component={FilterScreenContainer} />
            <Route path="/upload" component={UploadScreenContainer} />
            <Route path="/uploaddetail" component={UploadDetailScreen} />
            <Route path="/animation" component={StartAnimation} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
