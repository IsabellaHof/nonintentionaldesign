import React, { Component } from 'react'
import styled from 'styled-components'
import nav_home_grey from '../img/nav_home_grey.svg'
import nav_upload_grey from '../img/nav_upload_grey.svg'
import nav_filter from '../img/nav_filter.svg'

const NavContainerStyled = styled.div`
  align-items: center;
  background: white;
  bottom: 0;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  height: 45px;
  left: 0;
  margin-left: -33px;
  padding-left: 33px;
  position: fixed;
  right: 0;
  width: 100%;
`
const NavArrangementStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 33px 0 33px;
  width: 100%;
`

export default class NavigationBarFilter extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <NavContainerStyled>
            <NavArrangementStyled>
              <a href="/nids">
                <img src={nav_home_grey} alt="" />
              </a>
              <a href="/upload">
                <img src={nav_upload_grey} alt="" />
              </a>
              <a href="/filter">
                <img src={nav_filter} alt="" />
              </a>
            </NavArrangementStyled>
          </NavContainerStyled>
        </nav>
      </React.Fragment>
    )
  }
}
