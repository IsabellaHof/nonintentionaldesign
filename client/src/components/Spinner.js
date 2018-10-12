import React, { Component } from 'react'
import styled from 'styled-components'

const SpinnerStyled = styled.div`
  height: 34px;
  width: 34px;

  &::before,
  &::after {
    border: 4px solid white;
    content: '';
    height: 30px;
    position: fixed;
    width: 30px;
  }
  &::after {
    animation: spinner 2.5s linear infinite;
  }
  &::before {
    animation: spinner 2.5s linear infinite;
    animation-direction: reverse;
    height: 44px;
    margin-left: -7px;
    margin-top: -7px;
    width: 44px;
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
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
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
