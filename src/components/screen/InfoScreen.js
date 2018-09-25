import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo_big from '../../img/logo_big.svg'
import arrow_right from '../../img/arrow_right.svg'

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`
const InfoScreenGrid = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  columns: 1;
`
const InfoScreenImage = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`
const InfoScreenHeadline = styled.div`
  margin-top: 60px;
  color: #fc4955;
  font-family: 'Roboto Mono';
  font-style: italic;
  font-size: 48px;
  font-weight: 700;
`
const InfoScreenRunningText = styled.div`
  margin-top: 10px;
  color: #000000;
  font-family: 'Loro';
  font-size: 38px;
  font-weight: 700;
`
const ImpressumStyled = styled.div`
  margin-top: 40px;
  color: #fc4955;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 400;
`

export default class InfoScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <InfoScreenGrid>
            <InfoScreenImage>
              <img src={logo_big} alt="Big Logo" />
            </InfoScreenImage>
            <InfoScreenHeadline>nid</InfoScreenHeadline>
            <InfoScreenRunningText>
              is a social image platform that aims to document and to spread
              Non-Intentional-Design in everyday life finds wherever it is
              found.&nbsp;
              <Link to={'/nids'}>
                <img src={arrow_right} alt="Arrow points to the right" />
              </Link>
              <ImpressumStyled>
                <u>Impressum</u> <br />
                <u>Datenschutz</u>
              </ImpressumStyled>
            </InfoScreenRunningText>
          </InfoScreenGrid>
        </Container>
      </React.Fragment>
    )
  }
}
