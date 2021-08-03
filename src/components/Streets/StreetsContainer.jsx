import { connect } from 'react-redux'
import { toggleStreetMenu } from '../../redux/reducers/streetsReducer'
import { Streets } from './Streets'

const StreetsContainer = props => {
  return (
    <Streets toggleStreetMenu={props.toggleStreetMenu} streets={props.streets} />
  )
}

const mapStateToProps = state => {
  return {
    streets: state.streets.streetsArr
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleStreetMenu: id => dispatch(toggleStreetMenu(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreetsContainer)