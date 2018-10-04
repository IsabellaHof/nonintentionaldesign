import React, { Component } from 'react'
import styled from 'styled-components'
import ImageScreenHeader from '../ImageScreenHeader'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import arrangement_grid from '../../img/arrangement_grid.svg'
import arrangement_grid_grey from '../../img/arrangement_grid_grey.svg'
import arrangement_row from '../../img/arrangement_row.svg'
import arrangement_row_grey from '../../img/arrangement_row_grey.svg'

const ImageScreenContainer = styled.div`
  columns: 2;
`
const ImageScreenContainerRow = styled.div`
  columns: 1;
`
const ArrangementContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
  margin-top: 45px;
  align-items: center;
`

const Image = styled.img`
  margin-bottom: 25px;
  height: auto;
  width: 100%;
`

export default class ImageScreen extends Component {
  componentDidMount() {
    this.props.fetchFinds()
  }

  static propTypes = {
    finds: PropTypes.arrayOf(PropTypes.object),
    onImageClick: PropTypes.func.isRequired,
    fetchFinds: PropTypes.func.isRequired,
  }

  state = {
    hidden: true,
  }

  toggleArrangement = () => {
    this.setState({
      hidden: !this.state.hidden,
    })
  }

  renderGridOrRowArrangments() {
    const { onImageClick, finds } = this.props
    return this.state.hidden ? (
      <React.Fragment>
        <ArrangementContainer>
          <img src={arrangement_grid} alt="grid arrangement" />
          <img
            onClick={this.toggleArrangement}
            src={arrangement_row_grey}
            alt="grid arrangement"
          />
        </ArrangementContainer>
        <ImageScreenContainer>
          {finds.map((find, index) => {
            return (
              <Link to={`/finds/${find._id}`} key={index}>
                <Image
                  key={index}
                  onClick={() => onImageClick(index)}
                  src={find.image}
                  alt=""
                />
              </Link>
            )
          })}
        </ImageScreenContainer>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <ArrangementContainer>
          <img
            onClick={this.toggleArrangement}
            src={arrangement_grid_grey}
            alt="grid arrangement"
          />
          <img src={arrangement_row} alt="grid arrangement" />
        </ArrangementContainer>
        <ImageScreenContainerRow>
          {finds.map((find, index) => {
            return (
              <Link to={'/detail/' + find.id} key={index}>
                <Image
                  key={index}
                  onClick={() => onImageClick(index)}
                  src={find.image}
                  alt=""
                />
              </Link>
            )
          })}
        </ImageScreenContainerRow>
      </React.Fragment>
    )
  }

  render() {
    if (this.props.finds) {
      return (
        <React.Fragment>
          <div data-test-id="ImageScreen">
            <ImageScreenHeader />
            {this.renderGridOrRowArrangments()}
          </div>
        </React.Fragment>
      )
    } else {
      return <div>Help</div>
    }
  }
}
