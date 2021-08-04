import { CloseIcon } from '../../icons/close'
import s from './Resident.module.scss'

export const Resident = (props) => {
  const deleteHandler = () => {
    props.deleteResidentThunk(props.id)
  }
  return (
    <li id={props.id} className={s.resident}>
      <button onClick={deleteHandler} className={s.delete}>
        <CloseIcon />
      </button>
      <span className={s.name}>{props.name}</span>
    </li>
  )
}