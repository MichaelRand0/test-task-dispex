import { Residents } from '../Residents/Residents'
import './Popup.scss'
import { CloseIcon } from './../icons/close'

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
        <Residents residents={props.residents} />
      </div>
    </div>
  )
}