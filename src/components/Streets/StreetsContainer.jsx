import { connect } from 'react-redux'
import { getFlatsThunk, toggleHouseMenu, toggleStreetMenu } from '../../redux/reducers/streetsReducer'
import { Streets } from './Streets'
import { getHousesThunk } from './../../redux/reducers/streetsReducer'

const StreetsContainer = props => {
  return (
    <Streets {...props} />
  )
}

const mapStateToProps = state => {
  return {
    streets: state.streets.streetsArr,
    companyId: state.companies.companyId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleStreetMenu: id => dispatch(toggleStreetMenu(id)),
    toggleHouseMenu: (streetId, houseId) => dispatch(toggleHouseMenu(streetId, houseId)),
    getFlatsThunk: (companyId, streetId, houseId) => dispatch(getFlatsThunk(companyId, streetId, houseId)),
    getHousesThunk: (companyId, streetId) => dispatch(getHousesThunk(companyId, streetId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreetsContainer)