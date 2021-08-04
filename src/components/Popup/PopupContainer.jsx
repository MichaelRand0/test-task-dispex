import { connect } from 'react-redux'
import { closePopup, deleteResidentThunk, openForm, postResidentThunk, setResidents } from '../../redux/reducers/popupReducer'
import { Popup } from './Popup'
import { closeForm } from './../../redux/reducers/popupReducer'

const PopupContainer = props => {
  return (
    <Popup {...props} />
  )
}

const mapStateToProps = state => {
  return {
    residents: state.popup.residents,
    isOpen: state.popup.isOpen,
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
    deleteResidentThunk: id => dispatch(deleteResidentThunk(id)),
    postResidentThunk: (currentFlat, resident) => dispatch(postResidentThunk(currentFlat, resident))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)