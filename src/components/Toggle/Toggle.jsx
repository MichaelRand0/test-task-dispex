import s from './Toggle.module.scss'
import { ArrowIcon } from './../icons/arrow'

export const Toggle = () => {
  return (
    <button className={s.toggle}>
      <ArrowIcon />
    </button>
  )
}