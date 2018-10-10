import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { createNewFind } from '../actions'

const UploadInputBoxContainer = styled.div`
  background-color: #fc4955;
  margin: 20px 0px 0 -33px;
  padding: 0 33px 20px 33px;
  width: 100%;
`

const CommentInputStyled = styled.input`
  background: #fc4955;
  border: 3px solid #ffffff;
  height: 20px;
  padding: 10px;
  outline: none;
  width: 92%;
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
  width: 92%;
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
const PostButtonStyled = styled.button`
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

class CreateNewFind extends Component {
  static propTypes = {
    createNewFind: PropTypes.func,
  }

  state = {
    image: '',
    findName: '',
    findDescription: '',
    findPerson: '',
    findCity: '',
    findMaterial: '',
  }

  onSubmit = e => {
    e.preventDefault()

    const findData = {
      image: this.state.image,
      findName: this.state.findName,
      findDescription: this.state.findDescription,
      findPerson: this.state.findPerson,
      findCity: this.state.findCity,
      findMaterial: this.state.findMaterial,
    }
    this.props.createNewFind(findData)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <UploadInputBoxContainer>
            <CommentInputStyled
              type="text"
              placeholder="Title ..."
              autoFocus
              onChange={this.onChange}
              name="findName"
              value={this.state.findName}
            />
            <CommentInputStoryStyled
              style={{ height: '200px' }}
              type="text"
              placeholder="Your Story ..."
              autoFocus
              name="findDescription"
              onChange={this.onChange}
              value={this.state.findDescription}
            />
            <div
              style={{
                gridTemplateColumns: '1fr 1fr',
                display: 'grid',
                width: '95.75%',
              }}
            >
              <CommentInputStyled
                type="text"
                placeholder="Country ..."
                autoFocus
                name="findCountry"
                onChange={this.onChange}
                value={this.state.findCountry}
              />
              <CommentInputStyled
                type="text"
                placeholder="City ..."
                autoFocus
              />
            </div>
            <CommentInputStyled
              type="text"
              placeholder="Material ..."
              autoFocus
              name="findMaterial"
              onChange={this.onChange}
              value={this.state.findMaterial}
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
        </form>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { createNewFind }
)(CreateNewFind)
