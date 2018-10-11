import React, { Component } from 'react'
import Images from './Images.js'
import UploadButton from './UploadButton.js'
import Spinner from './Spinner.js'
import styled from 'styled-components'

const UploadImageStyled = styled.div``

export default class UploadImage extends Component {
  state = {
    uploading: false,
    images: [],
  }
  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch('http://localhost:5000/api/finds/image-upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(newImages => {
        this.setState({
          uploading: false,
          images: [...this.state.images, ...newImages],
        })
        this.props.onDone(newImages[0].secure_url)
      })
  }
  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch (true) {
      case uploading:
        return <Spinner />
      case images.length > 0:
        return <Images images={images} removeImage={this.removeImage} />
      default:
        return <UploadButton onChange={this.onChange} />
      }
    }
    return <UploadImageStyled>{content()}</UploadImageStyled>
  }
}
