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
  margin-top: 15px;
  margin-bottom: 30px;
`
const TagStyled = styled.div`
  color: #fc4955;
  border: 2px solid #fc4955;
  display: inline-block;
  font-size: 14px;
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 20px;
  padding: 6px;

  &:hover {
    background-color: #fc4955;
    color: white;
  }
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
  }

  renderTags() {
    const { selectedIndex } = this.props
    return this.props.find[selectedIndex].findMaterial.map((tag, index) => {
      return (
        <TagStyled key={index} text={tag}>
          {tag}
        </TagStyled>
      )
    })
  }

  render() {
    if (this.props.find) {
      const { find, selectedIndex } = this.props
      console.log(this.props)
      const {
        image,
        findName,
        findDescription,
        findPerson,
        findCity,
        findCountry,
      } = find[selectedIndex]

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
    } else {
      return <div>help</div>
    }
  }
}
