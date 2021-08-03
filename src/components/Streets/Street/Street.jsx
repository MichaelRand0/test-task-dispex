import { Houses } from '../../Houses/Houses'
import { Toggle } from '../../Toggle/Toggle'
import s from './Street.module.scss'

export const Street = ({streetId, toggleStreetMenu, streetName, isOpen, houses}) => {
  return (
    <li id={streetId} className={`${s.street} ${isOpen ? s.street_opened : ''}`}>
      <div className={s.heading}>
        <h2 className={s.name}>{`Улица ${streetName}`}</h2>
        <Toggle menuId={streetId} clickEvent={toggleStreetMenu} isOpen={isOpen} />
      </div>
      <Houses />
    </li>
  )
}