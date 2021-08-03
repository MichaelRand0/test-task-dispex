import s from './Toggle.module.scss'
import { ArrowIcon } from './../icons/arrow'

export const Toggle = (props) => {
  const toggleClickHandler = () => {
    props.clickEvent(props.menuId)
  }
  return (
    <button onClick={e => toggleClickHandler()} className={`${s.toggle} ${props.isOpen ? s.toggle_opened : ''}`}>
      <ArrowIcon />
    </button>
  )
}