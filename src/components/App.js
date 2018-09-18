import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ImageScreen from './ImageScreen'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ImageScreen} />
          <Route path="/info" component={ImageScreen} />
        </div>
      </Router>
    )
  }
}

export default App
