import React, { Component } from 'react'
import UploadDetailScreenHeader from '../UploadDetailScreenHeader'
import NavigationBarUpload from '../NavigationBarUpload'
import styled from 'styled-components'
import CreateNewFind from '../CreateNewFind'

const TextStyled = styled.div`
  color: #000000;
  font-family: 'Loro';
  font-size: 26px;
  margin-top: 80px;
`
const NidStyled = styled.a`
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

export default class UploadDetailScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <UploadDetailScreenHeader style={{ position: 'absoulte' }} />
        <TextStyled>
          Upload your <NidStyled>nid:</NidStyled>
        </TextStyled>
        <UploadInputBoxContainer>
          <CreateNewFind />
        </UploadInputBoxContainer>
        <NavigationBarUpload />
      </React.Fragment>
    )
  }
}
