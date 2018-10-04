import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DetailScreenHeader from '../DetailScreenHeader'
import CommentBoxContainer from '../../containers/CommentBoxContainer.js'
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
  margin-top: 15px;
  margin-bottom: 30px;
`
const TagStyled = styled.div`
  border: 2px solid #fc4955;
  color: #fc4955;
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 20px;
  padding: 6px;

  &:hover {
    background-color: #fc4955;
    color: white;
    font-family: 'Roboto Mono';
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    font-family: 'Roboto Mono';
    font-size: 14px;
    font-weight: 400;
    margin-right: 6px;
    margin-top: 6px;
    margin-bottom: 20px;
    padding: 6px;
  }
`
const TagMainPointStyled = styled.a`
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`

export default class DetailScreen extends Component {
  static propTypes = {
    state: PropTypes.arrayOf(PropTypes.object),
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
  }

  renderTags() {
    const { selectedIndex } = this.props
    return this.props.finds[selectedIndex].findMaterial.map((tag, index) => {
      return (
        <TagStyled key={index} text={tag}>
          {tag}
        </TagStyled>
      )
    })
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
          discovered by {findPerson} in {findCity}, {findCountry}
        </DiscoverDetailStyled>
        <TagMainPointStyled>
          Material <div>{this.renderTags()}</div>
        </TagMainPointStyled>
        <hr />
        <CommentBoxContainer />
      </React.Fragment>
    )
  }
}
