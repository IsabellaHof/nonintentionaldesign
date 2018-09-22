import React, { Component } from 'react'

import reducer from '../reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ImageScreenContainer from '../containers/ImageScreenContainer'
import DetailScreenContainer from '../containers/DetailScreenContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import finds from '../data/finds'
// import ImageScreen from './screen/ImageScreen'

const store = createStore(reducer)

class App extends Component {
  // renderImageDetail = ({ match }) => {
  //   const findID = Number(match.params.id)
  //   const foundFinds = finds.find(find => find.id === findID)
  //   return <ImageScreen find={foundFinds} />
  // }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={ImageScreenContainer} />
            <Route
              path="/detail/:id"
              // render={this.renderImageDetail}
              component={DetailScreenContainer}
            />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
