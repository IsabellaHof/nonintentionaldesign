import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.any,
    children: PropTypes.any,
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
  render() {
    return this.props.children
  }
}
