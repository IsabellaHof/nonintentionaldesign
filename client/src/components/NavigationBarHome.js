import React, { Component } from 'react'
import styled from 'styled-components'
import nav_home from '../img/nav_home.svg'
import nav_upload_grey from '../img/nav_upload_grey.svg'
import nav_filter_grey from '../img/nav_filter_grey.svg'

const NavContainerStyled = styled.div`
  background: white;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  display: flex;
  height: 45px;
  align-items: center;
  margin-left: -33px;
  padding-left: 33px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`
const NavArrangementStyled = styled.div`
  margin-left: 33px;
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin-right: 33px;
`

export default class NavigationBarHome extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <NavContainerStyled>
            <NavArrangementStyled>
              <a href="/nids">
                <img src={nav_home} alt="" />
              </a>
              <a href="/upload">
                <img src={nav_upload_grey} alt="" />
              </a>
              <a href="/filter">
                <img src={nav_filter_grey} alt="" />
              </a>
            </NavArrangementStyled>
          </NavContainerStyled>
        </nav>
      </React.Fragment>
    )
  }
}
