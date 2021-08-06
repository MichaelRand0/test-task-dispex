import s from './Houses.module.scss'
import { House } from './House/House'

export const Houses = props => {
  const housesElements = props.housesArr.map(item => {
    return <House {...props} isOpen={item.isOpen} key={item.houseId} houseId={item.houseId} building={item.building} />
  })
  return (
    <ul className={`${s.houses}`}>
      {housesElements}
    </ul>
  )
}