import React, { Component } from 'react'
import styled from 'styled-components'
import ImageScreenHeader from '../ImageScreenHeader'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StyledImageContainer = styled.div`
  columns: 2;
  margin-top: -8px;
`
const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`

export default class ImageScreen extends Component {
  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    onImageClick: PropTypes.func.isRequired,
  }
  render() {
    const { onImageClick, finds } = this.props
    return (
      <React.Fragment>
        <ImageScreenHeader />
        <StyledImageContainer>
          {finds.map((find, index) => {
            return (
              <Link to={'/detail/' + find.id} key={index}>
                <Image
                  key={index}
                  onClick={() => onImageClick(index)}
                  src={find.image}
                  alt=""
                />
              </Link>
            )
          })}
        </StyledImageContainer>
      </React.Fragment>
    )
  }
}
