import { Street } from './Street/Street'
import s from './Streets.module.scss'

export const Streets = () => {
  return (
    <ul className={s.streets}>
      <Street />
    </ul>
  )
}