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
const DiscoverDetailStyled = styled.div`
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 25px;
`
const TagStyled = styled.div`
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 200px;
  display: inline-block;
  background-color: #fc4955;
  padding: 6px;
  margin: 6px;
  color: white;
`
const TagMainPointSyled = styled.a`
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 200px;
  color: #fc4955;
`

export default class DetailScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    Material: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
  }

  renderTags() {
    const { Material } = this.props
    return this.props.finds.map(index => (
      <TagStyled key={index} text={Material} />
    ))
  }

  render() {
    const { finds, selectedIndex } = this.props
    const {
      image,
      findName,
      findDescription,
      findPerson,
      findCity,
      findCountry,
    } = finds[selectedIndex]

    return (
      <React.Fragment>
        <DetailScreenHeader />
        <StyledImageContainer>
          <Image src={image} alt="" />
        </StyledImageContainer>
        <HeadlineDetailStyled>{findName}</HeadlineDetailStyled>
        <TextDetailStyled>{findDescription}</TextDetailStyled>
        <DiscoverDetailStyled>
          discovered by {findPerson} in {findCity},{findCountry}
        </DiscoverDetailStyled>
        <TagMainPointSyled>
          Material:
          {this.renderTags()}
        </TagMainPointSyled>
      </React.Fragment>
    )
  }
}
