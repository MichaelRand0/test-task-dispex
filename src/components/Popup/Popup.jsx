import { Residents } from '../Residents/Residents'
import './Popup.scss'
import { CloseIcon } from './../icons/close'
import { Forma } from './Form/Form'

export const Popup = props => {
  const closeHandler = () => {
    props.closePopup()
  }
  return (
    <div className={`popup`}>
      <div className='popup__wrapper'>
        <button onClick={closeHandler} className='popup__close'>
          <CloseIcon />
        </button>
        <Residents deleteResidentThunk={props.deleteResidentThunk} openForm={props.openForm} residents={props.residents} />
        {props.isPopupFormOpen ? <Forma residents={props.residents} setResidents={props.setResidents} currentFlat={props.currentFlat} postResidentThunk={props.postResidentThunk} closeForm={props.closeForm} /> : ''}
      </div>
    </div>
  )
}