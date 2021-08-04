import { Houses } from '../../Houses/Houses'
import { Toggle } from '../../Toggle/Toggle'
import s from './Street.module.scss'

export const Street = ({ streetId, setResidents, companyId, getHousesThunk, getFlatsThunk, toggleStreetMenu, toggleHouseMenu, streetName, isOpen, houses }) => {
  const toggleClickHandler = () => {
    getHousesThunk(companyId, streetId)
    toggleStreetMenu(streetId)
  }
  return (
    <li id={streetId} className={`${s.street} ${isOpen ? s.street_opened : ''}`}>
      <div className={s.heading}>
        <h2 className={s.name}>{`Улица ${streetName}`}</h2>
        <Toggle clickHandler={toggleClickHandler} isOpen={isOpen} />
      </div>
      <Houses setResidents={setResidents} companyId={companyId} getFlatsThunk={getFlatsThunk} streetId={streetId} toggleHouseMenu={toggleHouseMenu} houses={houses} />
    </li>
  )
}