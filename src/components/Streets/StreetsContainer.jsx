import { connect } from 'react-redux'
import { getFlatsThunk, setCurrentFlat, setCurrentHouse, setCurrentStreet, toggleHouseMenu, toggleStreetMenu } from '../../redux/reducers/streetsReducer'
import { Streets } from './Streets'
import { getHousesThunk } from './../../redux/reducers/streetsReducer'
import { setResidents } from '../../redux/reducers/popupReducer'

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
    setResidents: arr => dispatch(setResidents(arr)),
    setCurrentFlat: id => dispatch(setCurrentFlat(id)),
    setCurrentHouse: id => dispatch(setCurrentHouse(id)),
    setCurrentStreet: id => dispatch(setCurrentStreet(id)),
    getHousesThunk: (companyId, streetId) => dispatch(getHousesThunk(companyId, streetId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreetsContainer)