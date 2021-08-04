import s from './Flats.module.scss'
import { Flat } from './Flat/Flat'

export const Flats = (props) => {
  const flatsElements = props.flats.map(item => {
    return <Flat setResidents={props.setResidents} {...item} key={item.addressId} name={item.flat} />
  })
  return (
    <ul className={s.flats}>
      {flatsElements}
    </ul>
  )
}