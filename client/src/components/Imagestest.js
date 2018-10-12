import React, { Component } from 'react'
import styled from 'styled-components'
import closeButton_white from '../img/closebutton_white.svg'
import PropTypes from 'prop-types'

const ImageStyled = styled.img`
  height: auto;
  margin: 0 0 20px 0;
  width: 100%;
`
const ImageDeleteButton = styled.div`
  margin: 10px 0 10px 0;
  padding-top: 20px;
`

export default class Imagestest extends Component {
  state = {
    images: [],
  }
  static propTypes = {
    removeImage: PropTypes.func,
    images: PropTypes.a,
  }

  render() {
    return (
      <React.Fragment>
        {images.map((image, i) => {
          return (
            <div key={i}>
              <ImageDeleteButton
                onClick={() => this.props.removeImage(image.public_id)}
              >
                <img src={closeButton_white} alt="Logo" />
              </ImageDeleteButton>

              <ImageStyled src={image.secure_url} alt="" />
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
