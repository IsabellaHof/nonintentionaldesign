import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100px;
  height: 50px;
  background-color: blueviolet;
  color: white;
  border-radius: 10px;
  font-size: ${props => (props.small ? '10px' : '20px')};
`

export default class Button extends Component {
  static propTypes = {
    //color:PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    small: PropTypes.any,
  }
  render() {
    return (
      <div>
        <StyledButton small={this.props.small} onClick={this.props.onClick}>
          {this.props.children}
        </StyledButton>
      </div>
    )
  }
}
