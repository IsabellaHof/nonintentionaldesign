import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import styled from 'styled-components'

import ImageOverview from './ImageOverview'

const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
  width: 375px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route exact path="/" component={ImageOverview} />
          <Route path="/info" component={ImageOverview} />
        </StyledApp>
      </Router>
    )
  }
}

export default App
