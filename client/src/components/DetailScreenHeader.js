import React, { Component } from 'react'
import styled from 'styled-components'
import closeButton from '../img/closebutton.svg'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.div`
  background-color: #ffffff;
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

export default class DetailScreenHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderStyled>
          <Link to={'/nids'}>
            <img src={closeButton} alt="Logo" />
          </Link>
        </HeaderStyled>
      </React.Fragment>
    )
  }
}
