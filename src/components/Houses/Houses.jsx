import s from './Houses.module.scss'
import { House } from './House/House'

export const Houses = (props) => {
  const housesElements = props.houses.map(item => {
    return <House companyId={props.companyId} getFlatsThunk={props.getFlatsThunk} streetId={props.streetId} toggleHouseMenu={props.toggleHouseMenu} isOpen={item.isOpen} key={item.houseId} houseId={item.houseId} building={item.building} flats={item.flats} />
  })
  return (
    <ul className={`${s.houses}`}>
      {housesElements}
    </ul>
  )
}