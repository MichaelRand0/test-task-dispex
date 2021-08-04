import s from './Flat.module.scss'

export const Flat = (props) => {
  return (
    <button className={s.flat}>{`Квартира ${props.name}`}</button>
  )
}