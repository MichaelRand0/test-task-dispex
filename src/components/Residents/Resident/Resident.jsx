import { CloseIcon } from '../../icons/close'
import s from './Resident.module.scss'

export const Resident = (props) => {
  return (
    <li id={props.id} className={s.resident}>
      <button className={s.delete}>
        <CloseIcon />
      </button>
      <span className={s.name}>{props.name}</span>
    </li>
  )
}