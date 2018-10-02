import React, { Component } from 'react'
import styled from 'styled-components'
import comment from '../img/comment_button_grey.svg'
import PropTypes from 'prop-types'

const CommentButtonContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: start;
`
const CommentButtonFontStyled = styled.div`
  align-items: center;
  color: #9b9b9b;
  display: flex;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 700;
  justify-content: start;
`
const CommentButton = styled.img`
  margin-right: 3px;
`
const CommentInputStyled = styled.textarea`
  background: #f7f7f7;
  border: 3px solid #fc4955;
  height: 100px;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  width: 96%;
`
const PostButtonStyled = styled.div`
  background-color: #fc4955;
  color: white;
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  padding: 6px;
  outline: none;
`
const CommentShowHeadlineStyled = styled.div`
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 700;
`

const CommentShowStyled = styled.div`
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 50px;
`
const DeleteButtonStyled = styled.button`
  color: #fc4955;
  opacity: 0;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export default class CommentBox extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.any,
    onChange: PropTypes.func,
    onDeleteComment: PropTypes.func,
    placeholder: PropTypes.string,
  }

  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    const input = event.target
    const { onChange } = this.props
    this.setState({ inputValue: input.value })
    onChange && onChange(input.value)
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue) {
      this.props.addComment(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  checkForButton = () => {
    const { inputValue } = this.state
    this.props.addComment(inputValue)
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <React.Fragment>
        <CommentButtonContainer>
          <CommentButtonFontStyled>
            <CommentButton src={comment} alt="Comment Button" />
            comment
          </CommentButtonFontStyled>
        </CommentButtonContainer>
        <CommentInputStyled
          type="text"
          placeholder={this.props.placeholder || 'Name: ... to comment ...'}
          onChange={this.updateInputValue}
          autoFocus
          value={this.state.inputValue}
          onKeyUp={this.checkForEnterButton}
        />
        <PostButtonStyled onClick={this.checkForButton}>Post</PostButtonStyled>
        <CommentShowHeadlineStyled>show all comments</CommentShowHeadlineStyled>
        <hr />
        <CommentShowStyled>{this.renderComments()}</CommentShowStyled>
      </React.Fragment>
    )
  }
  renderComments() {
    const { comments, onDeleteComment } = this.props

    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <span>{comment.text}</span>
            <DeleteButtonStyled onClick={() => onDeleteComment(index)}>
              &times;
            </DeleteButtonStyled>
          </div>
        ))}
      </div>
    )
  }
}
