import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'

const HeaderStyled = styled.div`
  background: white;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  height: 45px;

  flex-direction: column;
  justify-content: center;
  margin-left: -33px;
  padding-left: 33px;
  position: fixed;
  top: 0;
  width: 100%;
`

export default class ImageScreenHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div data-test-id="ImageScreen">
          <HeaderStyled>
            <img src={logo} alt="Logo" />
          </HeaderStyled>
        </div>
      </React.Fragment>
    )
  }
}
