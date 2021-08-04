import s from './House.module.scss'
import { Toggle } from './../../Toggle/Toggle'
import { Flats } from '../../Flats/Flats'

export const House = (props) => {
  const toggleClickHandler = () => {
    props.getFlatsThunk(props.companyId, props.streetId, props.houseId)
    props.toggleHouseMenu(props.streetId, props.houseId)
  }
  return (
    <li id={props.id} className={`${s.house} ${props.isOpen ? s.house_opened : ''}`}>
      <div className={s.heading}>
        <h2 className={s.name}>Дом: {props.building}</h2>
        <Toggle clickHandler={toggleClickHandler} isOpen={props.isOpen} />
      </div>
      <Flats setCurrentFlat={props.setCurrentFlat} setResidents={props.setResidents} flats={props.flats} />
    </li>
  )
}