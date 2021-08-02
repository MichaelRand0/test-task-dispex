import { CloseIcon } from '../../icons/close'
import s from './Resident.module.scss'

export const Resident = () => {
  return (
    <li className={s.resident}>
      <button className={s.delete}>
        <CloseIcon />
      </button>
      <span className={s.name}>Жилец 1</span>
    </li>
  )
}