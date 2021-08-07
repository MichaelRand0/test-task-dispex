import s from './Back.module.scss'
import { BackIcon } from './../icons/back'

export const Back = props => {
  return (
    <button onClick={props.changeScreen} className={s.back}>
      <BackIcon />
    </button>
  )
}