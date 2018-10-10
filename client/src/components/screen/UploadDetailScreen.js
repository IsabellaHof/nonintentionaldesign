import React, { Component } from 'react'
import UploadDetailScreenHeader from '../UploadDetailScreenHeader'
import NavigationBarUpload from '../NavigationBarUpload'
import styled from 'styled-components'
import Images from '../Images.js'
import UploadButton from '../UploadButton.js'
import Spinner from '../Spinner.js'
import CreateNewFind from '../CreateNewFind'

const TextStyled = styled.div`
  color: #000000;
  font-family: 'Loro';
  font-size: 26px;
  margin-top: 80px;
`
const NidStyled = styled.text`
  color: #fc4955;
  font-family: 'Roboto Mono';
  font-size: 26px;
  font-style: italic;
`
const UploadInputBoxContainer = styled.div`
  background-color: #fc4955;
  margin: 20px 0px 0 -33px;
  padding: 0 33px 20px 33px;
  width: 100%;
`

// const CommentInputStyled = styled.input`
//   background: #fc4955;
//   border: 3px solid #ffffff;
//   height: 20px;
//   padding: 10px;
//   outline: none;
//   width: 92%;
//   margin-top: -7px;
//   color: #ffffff;
//   font-family: 'Lora';
//   font-weight: 700;
//   &::-webkit-input-placeholder {
//     color: #ffffff;
//     font-family: 'Roboto Mono';
//     font-weight: 700;
//   }
// `
// const CommentInputStoryStyled = styled.textarea`
//   background: #fc4955;
//   border: 3px solid #ffffff;
//   height: 15px;
//   padding: 10px;
//   outline: none;
//   width: 92%;
//   margin-top: -7px;
//   color: #ffffff;
//   font-family: 'Lora';
//   font-weight: 700;
//   &::-webkit-input-placeholder {
//     color: #ffffff;
//     font-family: 'Roboto Mono';
//     font-weight: 700;
//   }
// `
const PostButtonStyled = styled.div`
  background-color: #fc4955;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin: 20px 0 80px 0;
  padding: 6px;
  outline: none;
`

export default class UploadDetailScreen extends Component {
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
      })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id),
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

    return (
      <React.Fragment>
        <UploadDetailScreenHeader style={{ position: 'absoulte' }} />
        <TextStyled>
          Upload your <NidStyled>nid:</NidStyled>
        </TextStyled>
        <UploadInputBoxContainer>
          <div>{content()}</div>
          <CreateNewFind />
        </UploadInputBoxContainer>
        <PostButtonStyled>Post</PostButtonStyled>
        <NavigationBarUpload />
      </React.Fragment>
    )
  }
}
