import React, { Component } from 'react'
import styled from 'styled-components'

const SpinnerStyled = styled.div`
  background: #fc4955;
  width: 10px;
  height: 10px;
  animation: spin 1.2s infinite linear;
`

export default class Spinner extends Component {
  render() {
    return <SpinnerStyled />
  }
}
