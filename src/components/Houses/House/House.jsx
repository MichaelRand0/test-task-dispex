import s from './House.module.scss'
import { Toggle } from './../../Toggle/Toggle'
import { Flats } from '../../Flats/Flats'

export const House = () => {
  return (
    <li className={s.house}>
      <div className={s.heading}>
        <h2 className={s.name}>Дом 1</h2>
        <Toggle />
      </div>
      <Flats />
    </li>
  )
}