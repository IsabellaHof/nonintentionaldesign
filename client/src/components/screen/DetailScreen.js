import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DetailScreenHeader from '../DetailScreenHeader'
import CommentBoxContainer from '../../containers/CommentBoxContainer.js'
import styled from 'styled-components'
import NavigationBarHome from '../NavigationBarHome'
import ScrollToTop from '../ScrollToTop'

const StyledImageContainer = styled.div`
  margin-top: 40px;
`
const Image = styled.div`
  margin-bottom: 25px;
  width: auto;
  height: 500px;
  background-image: ${props => `url(${props.src})`};
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 110%;
`
const HeadlineDetailStyled = styled.div`
  font-style: italic;
  font-size: 38px;
`
const TextDetailStyled = styled.div`
  color: #000000;
  font-family: 'Loro';
  font-size: 26px;
  margin-top: 25px;
`
const DiscoverDetailStyled = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  margin: 15px 0 30px 0;
`
const TagStyled = styled.div`
  background-color: #fc4955;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  margin: 6px 6px 20px 0;
  padding: 6px;

  /* &:hover {
    border: 2px solid #fc4955;
    color: #fc4955;
  } */
`
const TagMainPointStyled = styled.a`
  color: #000000;
  font-size: 16px;
  margin-bottom: 20px;
`

export default class DetailScreen extends Component {
  componentDidMount() {
    this.props.fetchSingleFind(this.props.match.params.id)
  }

  static propTypes = {
    state: PropTypes.arrayOf(PropTypes.object),
    finds: PropTypes.arrayOf(PropTypes.object),
    selectedIndex: PropTypes.number,
    fetchSingleFind: PropTypes.func,
    match: PropTypes.any,
    find: PropTypes.any,
    comments: PropTypes.any,
    onImageClick: PropTypes.func.isRequired,
  }

  renderTags() {
    // const { selectedIndex } = this.props
    return this.props.find[0].findMaterial.map((tag, index) => {
      return (
        <TagStyled key={index} text={tag}>
          {tag}
        </TagStyled>
      )
    })
  }

  render() {
    if (this.props.find) {
      const { find } = this.props
      const {
        image,
        findName,
        findDescription,
        findPerson,
        findCity,
        findCountry,
      } = find[0]
      return (
        <React.Fragment>
          <DetailScreenHeader />
          <StyledImageContainer>
            <Image src={image} alt="" />
          </StyledImageContainer>
          <ScrollToTop>
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
          </ScrollToTop>
          <NavigationBarHome />
        </React.Fragment>
      )
    } else {
      return <div>help</div>
    }
  }
}
