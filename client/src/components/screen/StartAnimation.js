import React, { Component } from 'react'
import logo_big_white from '../../img/logo_big_white.svg'
import styled from 'styled-components'

const StartAnimationContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #fc4955;
  margin: -20px 0 0 -33px;
  padding: 0 33px 20px 33px;
  width: 100%;
  height: 100vh;
`

const Image = styled.img`
  justify-content: center;

  &:hover {
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
  }
`

export default class StartAnimation extends Component {
  render() {
    return (
      <React.Fragment>
        <StartAnimationContainer>
          <Image src={logo_big_white} alt="Big Logo" />
        </StartAnimationContainer>
      </React.Fragment>
    )
  }
}
