import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DetailScreenHeader from '../DetailScreenHeader'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
  margin-top: 20px;
`
const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`
const HeadlineDetailStyled = styled.div`
  color: #fc4955;
  font-family: 'Roboto Mono';
  font-style: italic;
  font-size: 38px;
  font-weight: 700;
`
const TextDetailStyled = styled.div`
  font-family: 'Loro';
  font-size: 26px;
  font-weight: 700;
  margin-top: 25px;
`

export default class DetailScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
  }

  render() {
    const { finds, selectedIndex } = this.props
    const { image, findName, findDescription } = finds[selectedIndex]
    return (
      <React.Fragment>
        <DetailScreenHeader />
        <StyledImageContainer>
          <Image src={image} alt="" />
        </StyledImageContainer>
        <HeadlineDetailStyled>{findName}</HeadlineDetailStyled>
        <TextDetailStyled>{findDescription}</TextDetailStyled>
      </React.Fragment>
    )
  }
}
