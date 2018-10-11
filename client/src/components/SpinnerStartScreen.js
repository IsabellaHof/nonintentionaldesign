import React, { Component } from 'react'
import styled from 'styled-components'

const SpinnerStyled = styled.div`
  width: 44px;
  height: 44px;

  &::before,
  &::after {
    content: '';
    position: fixed;
    border: 4px solid white;
    width: 30px;
    height: 30px;
  }
  &::after {
    animation: spinner 2.5s linear infinite;
  }
  &::before {
    width: 44px;
    height: 44px;
    margin-left: -7px;
    margin-top: -7px;
    animation: spinner 2.5s linear infinite;
    animation-direction: reverse;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const SpinnerStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export default class Spinner extends Component {
  render() {
    return (
      <SpinnerStyledContainer>
        <SpinnerStyled />
      </SpinnerStyledContainer>
    )
  }
}
