import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import styled from 'styled-components'
import GameScreenContainer from '../containers/GameScreenContainer'
import StartScreenContainer from '../containers/StartScreenContainer'
import SetupScreenContainer from '../containers/SetupScreenContainer'
import SummaryScreenContainer from '../containers/SummaryScreenContainer'
import { saveToLocalStorage } from '../middleware'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import { loadPlayersFromServer } from '../actions'

const StyledApp = styled.div`
  text-align: center;
  height: 90vh;
  width: 300px;
`

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage, thunk)
)

class App extends Component {
  componentDidMount() {
    store.dispatch(loadPlayersFromServer())
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <StyledApp>
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/setup" component={SetupScreenContainer} />
            <Route path="/summary" component={SummaryScreenContainer} />
            <Route path="/game" component={GameScreenContainer} />
          </StyledApp>
        </Provider>
      </Router>
    )
  }
}

export default App
