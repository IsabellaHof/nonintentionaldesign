import React, { Component } from 'react'
import UploadDetailScreenHeader from '../UploadDetailScreenHeader'
import NavigationBarUpload from '../NavigationBarUpload'
import styled from 'styled-components'

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
  margin: 20px 0 0 -33px;
  padding: 0 33px 20px 33px;
  width: 100%;
`
const Container = styled.div`
  padding: 25px 0 25px 0;
`
const UploadBox = styled.div`
  align-content: center;
  border: 6px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 140px;
  font-weight: 300;
  height: 209px;
  justify-content: center;
  margin-bottom: 25px;
  width: 209px;

  &:hover {
    background: #ffffff;
    color: #fc4955;
  }
`

const CommentInputStyled = styled.input`
  background: #fc4955;
  border: 3px solid #ffffff;
  height: 20px;
  padding: 10px;
  outline: none;
  width: 96%;
  margin-top: -7px;
  color: #ffffff;
  font-family: 'Lora';
  font-weight: 700;
  &::-webkit-input-placeholder {
    color: #ffffff;
    font-family: 'Roboto Mono';
    font-weight: 700;
  }
`
const CommentInputStoryStyled = styled.textarea`
  background: #fc4955;
  border: 3px solid #ffffff;
  height: 15px;
  padding: 10px;
  outline: none;
  width: 96%;
  margin-top: -7px;
  color: #ffffff;
  font-family: 'Lora';
  font-weight: 700;
  &::-webkit-input-placeholder {
    color: #ffffff;
    font-family: 'Roboto Mono';
    font-weight: 700;
  }
`
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
  render() {
    return (
      <React.Fragment>
        <UploadDetailScreenHeader />
        <TextStyled>
          Upload your <NidStyled>nid:</NidStyled>
        </TextStyled>
        <UploadInputBoxContainer>
          <Container>
            <UploadBox>+</UploadBox>
          </Container>
          <CommentInputStyled type="text" placeholder="Title ..." autoFocus />
          <CommentInputStoryStyled
            style={{ height: '200px' }}
            type="text"
            placeholder="Your Story ..."
            autoFocus
          />
          <div
            style={{
              gridTemplateColumns: '1fr 1fr',
              display: 'grid',
              width: '98%',
            }}
          >
            <CommentInputStyled
              type="text"
              placeholder="Country ..."
              autoFocus
            />
            <CommentInputStyled type="text" placeholder="City ..." autoFocus />
          </div>
          <CommentInputStyled
            type="text"
            placeholder="Material ..."
            autoFocus
          />

          <div
            style={{
              marginTop: '50px',
            }}
          >
            <CommentInputStyled
              type="text"
              placeholder="Your Name ..."
              autoFocus
            />
            <CommentInputStyled
              type="text"
              placeholder="Your E-Mail ..."
              autoFocus
            />
          </div>
        </UploadInputBoxContainer>
        <PostButtonStyled>Post</PostButtonStyled>
        <NavigationBarUpload />
      </React.Fragment>
    )
  }
}
