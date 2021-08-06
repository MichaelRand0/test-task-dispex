import s from './Houses.module.scss'
import { House } from './House/House'

export const Houses = props => {
  const housesElements = props.housesArr.map(item => {
    return <House setCurrentHouse={props.setCurrentHouse} setCurrentFlat={props.setCurrentFlat} setResidents={props.setResidents} companyId={props.companyId} getFlatsThunk={props.getFlatsThunk} streetId={props.streetId} toggleHouseMenu={props.toggleHouseMenu} isOpen={item.isOpen} key={item.houseId} houseId={item.houseId} building={item.building} flats={props.flatsArr} />
  })
  return (
    <ul className={`${s.houses}`}>
      {housesElements}
    </ul>
  )
}