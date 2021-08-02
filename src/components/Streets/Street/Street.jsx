import { Houses } from '../../Houses/Houses'
import { Toggle } from '../../Toggle/Toggle'
import s from './Street.module.scss'

export const Street = () => {
  return (
    <li className={s.street}>
      <div className={s.heading}>
        <h2 className={s.name}>Улица 1</h2>
        <Toggle />
      </div>
      <Houses />
    </li>
  )
}