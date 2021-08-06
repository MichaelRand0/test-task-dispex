import s from './Flats.module.scss'
import { Flat } from './Flat/Flat'

export const Flats = props => {
  const flatsElements = props.flatsArr.map(item => {
    return <Flat {...item} {...props} key={item.addressId} name={item.flat} />
  })
  return (
    <ul className={s.flats}>
      {flatsElements}
    </ul>
  )
}