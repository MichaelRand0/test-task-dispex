import s from './Flat.module.scss'

export const Flat = (props) => {
  const flatHandler = () => {
    props.setResidents(props.clients)
  }
  return (
    <button onClick={flatHandler} className={s.flat}>{`Квартира ${props.name}`}</button>
  )
}