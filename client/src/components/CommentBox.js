import React, { Component } from 'react'
import styled from 'styled-components'
import comment from '../img/comment_button_grey.svg'
import PropTypes from 'prop-types'

const CommentButtonContainer = styled.div`
  height: 40px;
  align-items: center;
  justify-content: start;
  display: flex;
`
const CommentButtonFontStyled = styled.div`
  color: #9b9b9b;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  justify-content: start;
  display: flex;
`
const Image = styled.img`
  margin-right: 3px;
`
const CommentInputStyled = styled.textarea`
  width: 96%;
  height: 100px;
  margin-top: 20px;
  border: 4px solid #fc4955;
  padding: 10px;
  background: #f7f7f7;
  outline: none;
`
const PostButtonStyled = styled.div`
  background-color: #fc4955;
  color: white;
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 400;
  margin: 6px;
  margin-bottom: 20px;
  padding: 6px;
  outline: none;
`

export default class CommentBox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    comments: PropTypes.any,
    onDeleteComment: PropTypes.func,
    addComment: PropTypes.func.isRequired,
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

  render() {
    return (
      <React.Fragment>
        <CommentButtonContainer>
          <CommentButtonFontStyled>
            <Image src={comment} alt="Comment Button" />
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
        <PostButtonStyled>Post</PostButtonStyled>
        <hr />
        {this.renderComments()}
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
            <span onClick={() => onDeleteComment(index)}>x</span>
          </div>
        ))}
      </div>
    )
  }
}
