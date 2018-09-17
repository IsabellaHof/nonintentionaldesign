import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GameInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  ckeckForEnterButton = event => {
    if (event.key === 'Enter' && this.state.inputValue) {
      this.props.onSubmit(this.state.inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateInputValue}
          onKeyUp={this.ckeckForEnterButton}
          placeholder={'Gamename'}
          autoFocus
          value={this.state.inputValue}
          type="text"
        />
      </div>
    )
  }
}
