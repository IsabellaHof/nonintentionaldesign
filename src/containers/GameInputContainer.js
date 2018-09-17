import { connect } from 'react-redux'
import Input from '../components/Input'
import { startGame, saveTempGameTitle } from '../actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    dispatch(startGame())
    ownProps.history.push('/setup')
  },
  onChange: tempGameTitle => dispatch(saveTempGameTitle({ tempGameTitle })),
})

const container = connect(
  null,
  mapDispatchToProps
)(Input)

export default withRouter(container)
