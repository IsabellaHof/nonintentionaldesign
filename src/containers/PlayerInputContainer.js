import { connect } from 'react-redux'
import { addPlayer } from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(addPlayer({ name })),
})

const wrappingFunction = connect(
  null,
  mapDispatchToProps
)

export default wrappingFunction(Input)
// erzeugt eine Funktion, die eine Componente erwartet, die wir hier übegeben
// Input kann jetzt überall eingestezt werden
// export default connect (mapStateToProps,mapDispatchToProps)(Input)
// map Zuordung
//const mapStateToProps = state => ({
//   placeholder: state.placeholder,
// })
