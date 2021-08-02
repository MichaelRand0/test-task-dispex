import { AddIcon } from '../icons/add'
import { Resident } from './Resident/Resident'
import s from './Residents.module.scss'

export const Residents = () => {
  return (
    <ul className={s.residents}>
      <Resident />
      <Resident />
      <Resident />
      <Resident />
      <Resident />
      <Resident />
      <li className={s.add}>
        <button>
          <AddIcon />
        </button>
      </li>
    </ul>
  )
}