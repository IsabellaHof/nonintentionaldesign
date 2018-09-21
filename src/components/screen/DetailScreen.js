import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DetailScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <React.Fragment>
        <h1>hello World</h1>
        {this.props.finds.map((find, index) => (
          <img key={index} src={find.image} alt="" />
        ))}
      </React.Fragment>
    )
  }
}
