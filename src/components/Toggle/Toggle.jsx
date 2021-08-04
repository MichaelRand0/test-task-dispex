import s from './Toggle.module.scss'
import { ArrowIcon } from './../icons/arrow'

export const Toggle = (props) => {
  return (
    <button onClick={props.clickHandler} className={`${s.toggle} ${props.isOpen ? s.toggle_opened : ''}`}>
      <ArrowIcon />
    </button>
  )
}