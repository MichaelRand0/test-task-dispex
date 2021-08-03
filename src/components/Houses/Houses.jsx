import s from './Houses.module.scss'
import { House } from './House/House'

export const Houses = () => {
  return (
    <ul className={`${s.houses}`}>
      <House />
      <House />
    </ul>
  )
}