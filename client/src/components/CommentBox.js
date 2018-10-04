import React, { Component } from 'react'
import styled from 'styled-components'
import comment_button_grey from '../img/comment_button_grey.svg'
import comment_button from '../img/comment_button.svg'
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
  font-size: 16px;
  justify-content: start;
  cursor: pointer;
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
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  padding: 6px;
  outline: none;
  cursor: pointer;
`
const CommentShowHeadlineStyled = styled.div`
  color: #4a4a4a;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
`

const CommentShowStyled = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
`
const DeleteButtonStyled = styled.a`
  margin-left: 2px;
  opacity: 0;

  &:hover {
    cursor: pointer;
    font-size: 14px;
    opacity: 1;
  }
`
const Space = styled.div`
  margin-bottom: 150px;
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
    hidden: true,
    hiddenComment: true,
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

  toggleCommentBox = () => {
    this.setState({
      hidden: !this.state.hidden,
    })
  }
  toggleComment = () => {
    this.setState({
      hiddenComment: !this.state.hiddenComment,
    })
  }

  renderLongOrShortCommentBox() {
    return this.state.hidden ? (
      <CommentButtonContainer onClick={this.toggleCommentBox}>
        <CommentButtonFontStyled>
          <CommentButton src={comment_button_grey} alt="Comment Button" />
          comment
        </CommentButtonFontStyled>
      </CommentButtonContainer>
    ) : (
      <React.Fragment>
        <CommentButtonContainer onClick={this.toggleCommentBox}>
          <CommentButtonFontStyled style={{ color: '#fc4955' }}>
            <CommentButton src={comment_button} alt="Comment Button" />
            comment
          </CommentButtonFontStyled>
        </CommentButtonContainer>
        <CommentInputStyled
          type="text"
          placeholder={this.props.placeholder || 'to comment ...'}
          onChange={this.updateInputValue}
          autoFocus
          value={this.state.inputValue}
          onKeyUp={this.checkForEnterButton}
        />
        <PostButtonStyled onClick={this.checkForButton}>Post</PostButtonStyled>
      </React.Fragment>
    )
  }

  renderLongOrShortComment() {
    const { comments } = this.props
    return this.state.hiddenComment ? (
      <CommentShowHeadlineStyled onClick={this.toggleComment}>
        show all {comments.length} comments
      </CommentShowHeadlineStyled>
    ) : (
      <React.Fragment>
        <CommentShowHeadlineStyled onClick={this.toggleComment}>
          show all {comments.length} comments
        </CommentShowHeadlineStyled>
        <hr />
        <CommentShowStyled>{this.renderComments()}</CommentShowStyled>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderLongOrShortCommentBox()}
        {this.renderLongOrShortComment()}
        <Space />
      </React.Fragment>
    )
  }

  renderComments() {
    const { comments, onDeleteComment } = this.props

    return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            {comment.text}
            <DeleteButtonStyled onClick={() => onDeleteComment(index)}>
              &times;
            </DeleteButtonStyled>
          </div>
        ))}
      </div>
    )
  }
}
