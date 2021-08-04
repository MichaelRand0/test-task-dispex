import { connect } from 'react-redux'
import { closePopup, openForm, postResidentThunk } from '../../redux/reducers/popupReducer'
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
    isPopupFormOpen: state.popup.isPopupFormOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch(closePopup()),
    openForm: () => dispatch(openForm()),
    closeForm: () => dispatch(closeForm()),
    postResidentThunk: resident => dispatch(postResidentThunk(resident))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)