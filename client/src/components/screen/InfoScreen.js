import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo_big from '../../img/logo_big.svg'
import arrow_right from '../../img/arrow_right.svg'

const InfoScreenContainer = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const InfoScreenImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const InfoScreenHeadline = styled.div`
  font-size: 48px;
  font-style: italic;
  margin-top: 60px;
`
const InfoScreenRunningText = styled.div`
  color: #000000;
  font-family: 'Loro';
  font-size: 38px;
  margin: 10px 0 60px 0;
`
const ImprintStyled = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  cursor: pointer;
`

export default class InfoScreen extends Component {
  state = {
    hiddenImprint: true,
    hiddenDataProtection: true,
  }

  toggleContentImprint = () => {
    this.setState({
      hiddenImprint: !this.state.hiddenImprint,
    })
  }
  toggleContentDataProtection = () => {
    this.setState({
      hiddenDataProtection: !this.state.hiddenDataProtection,
    })
  }

  renderShortOrLongImprint() {
    return this.state.hiddenImprint ? (
      <strong>
        <p onClick={this.toggleContentImprint}>Imprint</p>
      </strong>
    ) : (
      <React.Fragment>
        <strong>
          <u onClick={this.toggleContentImprint}>Imprint</u>
        </strong>
        <p style={{ color: '#000000' }}>
          © 2018 Isabella Hof <br />
          All rights reserved. <br />
          <br />
          <strong>Programming, Idea and Conception</strong> <br />
          Isabella Hof <br />
          <br />
          <strong>Responsible</strong> <br />
          Isabella Hof <br />
          Barmbeker Str. 9 <br />
          22303 Hamburg <br />
          Germany <br />
          <br />
          (in German) <br />
          <strong>Haftungshinweis</strong> <br />
          Die Inhalte dieser Seite wurde mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
          keine Gewähr übernohmen werden. Als Diensteanbieter bin ich gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen. <br />
          Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich. <br />
          <br />
          <strong>Urheberrecht</strong> <br />
          Die erstellten Inhalte und Werke dieser Seite unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
          und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
          erstellt wurden, werden die Urheberrechte Dritter beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
        </p>
      </React.Fragment>
    )
  }

  renderShortOrLongDataProtection() {
    return this.state.hiddenDataProtection ? (
      <strong>
        <p onClick={this.toggleContentDataProtection}>Data Protection</p>
      </strong>
    ) : (
      <React.Fragment>
        <strong>
          <u onClick={this.toggleContentDataProtection}>Data Protection</u>
        </strong>
        <p style={{ color: '#000000' }}>
          <strong>your rights and information</strong> <br />
          If you no longer consent to the storage of your personal data or if
          import from module; has become incorrect, we will, upon request,
          delete or block your data or make the necessary corrections (as far as
          this is possible under applicable law). <br />
          Upon request, you will receive free of charge information about all
          personal data that we have stored about you. <br />
          <br />
          (in German) <br />
          Soweit auf den Seiten personenbezogene Daten (beispielsweise Name,
          Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit
          möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
          ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
          darauf hin, dass die Datenübertragung im Internet (z.B. bei der
          Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. Der Nutzung von im Rahmen der Impressumspflicht
          veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
          ausdrücklich angeforderter Werbung und Informationsmaterialien wird
          hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten
          sich ausdrücklich rechtliche Schritte im Falle der unverlangten
          Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor. <br />
        </p>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <InfoScreenContainer data-test-id="InfoScreen">
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
          </InfoScreenRunningText>
          <ImprintStyled>
            {this.renderShortOrLongImprint()}
            {this.renderShortOrLongDataProtection()}
          </ImprintStyled>
        </InfoScreenContainer>
      </React.Fragment>
    )
  }
}
