import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  }
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    const input = event.target
    const { onChange } = this.props
    this.setState({
      inputValue: input.value,
    })
    onChange && onChange(input.value)
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
          placeholder={this.props.placeholder || 'Player name'}
          autoFocus
          value={this.state.inputValue}
          type="text"
        />
      </div>
    )
  }
}
