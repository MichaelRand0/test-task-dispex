import s from './Flat.module.scss'

export const Flat = (props) => {
  const flatHandler = () => {
    props.setResidents(props.clients)
    props.setCurrentFlat(props.addressId)
  }
  return (
    <button onClick={flatHandler} className={s.flat}>{`Квартира ${props.name}`}</button>
  )
}