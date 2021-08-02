import s from './Flats.module.scss'
import { Flat } from './Flat/Flat';

export const Flats = () => {
  return (
    <ul className={s.flats}>
      <Flat />
      <Flat />
      <Flat />
      <Flat />
      <Flat />
      <Flat />
    </ul>
  )
}