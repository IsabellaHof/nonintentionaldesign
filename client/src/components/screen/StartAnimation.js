import React, { Component } from 'react'
import styled from 'styled-components'

const StartAnimationContainer = styled.div`
  align-items: center;
  animation: fadeout 2s;
  animation-fill-mode: forwards;
  background-color: #fc4955;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: -20px 0 0 -33px;
  padding: 0 33px 20px 33px;
  position: absolute;
  top: -10px;
  width: 100%;

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      animation: 1.5s ease;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`
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

export default class StartAnimation extends Component {
  render() {
    return (
      <React.Fragment>
        <StartAnimationContainer>
          <SpinnerStyled />
        </StartAnimationContainer>
      </React.Fragment>
    )
  }
}
