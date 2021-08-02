import { Residents } from '../Residents/Residents'
import './Popup.scss'
import { CloseIcon } from './../icons/close';

export const Popup = () => {
  return (
    <div className='popup'>
      <div className='popup__wrapper'>
        <button className='popup__close'>
          <CloseIcon />
        </button>
        <Residents />
      </div>
    </div>
  )
}