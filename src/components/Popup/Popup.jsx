import { Residents } from '../Residents/Residents'
import './Popup.scss'
import { CloseIcon } from './../icons/close'
import { Form } from './Form/Form'

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
        <Residents openForm={props.openForm} postResidentThunk={props.postResidentThunk} residents={props.residents} />
        {props.isPopupFormOpen ? <Form closeForm={props.closeForm} /> : ''}
      </div>
    </div>
  )
}