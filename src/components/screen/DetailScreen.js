import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
  margin-top: -8px;
`
const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`

const HeadlineDetailStyled = styled.div`
  font-family: 'Roboto Mono';
  font-weight: 700;
  font-style: italic;
  font-size: 38px;
  color: #fc4955;
`

const TextDetailStyled = styled.div`
  margin-top: 25px;
  font-family: 'Loro';
  font-weight: 700;
  font-size: 26px;
`

export default class DetailScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { finds } = this.props
    const firstFind = finds[0]
    return (
      <React.Fragment>
        <DetailScreenHeader />
        <StyledImageContainer>
          <Image src={firstFind.image} alt="" />
        </StyledImageContainer>
        <HeadlineDetailStyled>{firstFind.findName}</HeadlineDetailStyled>
        <TextDetailStyled>{firstFind.findDescription}</TextDetailStyled>
      </React.Fragment>
    )
  }
}
