import { connect } from 'react-redux'
import { closePopup, deleteResidentThunk, openForm, postResidentThunk, setResidents } from '../../redux/reducers/popupReducer'
import { Popup } from './Popup'
import { closeForm } from './../../redux/reducers/popupReducer'
import { getFlatsThunk } from '../../redux/reducers/streetsReducer'

const PopupContainer = props => {
  return (
    <Popup {...props} />
  )
}

const mapStateToProps = state => {
  return {
    residents: state.popup.residents,
    isOpen: state.popup.isOpen,
    companyId: state.companies.companyId,
    currentStreet: state.streets.currentStreet,
    currentHouse: state.streets.currentHouse,
    currentFlat: state.streets.currentFlat,
    isPopupFormOpen: state.popup.isPopupFormOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch(closePopup()),
    openForm: () => dispatch(openForm()),
    closeForm: () => dispatch(closeForm()),
    setResidents: residents => dispatch(setResidents(residents)),
    getFlatsThunk: (companyId, streetId, houseId) => dispatch(getFlatsThunk(companyId, streetId, houseId)),
    deleteResidentThunk: id => dispatch(deleteResidentThunk(id)),
    postResidentThunk: (currentFlat, resident) => dispatch(postResidentThunk(currentFlat, resident))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)