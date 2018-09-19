import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ImageScreen from './screen/ImageScreen'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ImageScreen} />
      </Router>
    )
  }
}

export default App
