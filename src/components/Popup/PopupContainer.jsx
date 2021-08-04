import { connect } from 'react-redux'
import { closePopup } from '../../redux/reducers/popupReducer'
import { Popup } from './Popup'

const PopupContainer = props => {
  return (
    <Popup {...props} />
  )
}

const mapStateToProps = state => {
  return {
    residents: state.popup.residents,
    isOpen: state.popup.isOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closePopup: () => dispatch(closePopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)