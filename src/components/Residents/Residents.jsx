import { AddIcon } from '../icons/add'
import { Resident } from './Resident/Resident'
import s from './Residents.module.scss'

export const Residents = props => {
  const addResidentHandler = () => {
    // props.postResidentThunk({Id: 41516, Name: 'Joe Cobe', Phone: '897206204', Email: 'JoeCobe@ya.ru', BindId: 7773434})
    props.openForm()
  }
  const residentsElements = props.residents.map(item => {
    return <Resident key={item.id} name={item.name} id={item.id} />
  })
  return (
    <ul className={s.residents}>
      {residentsElements}
      <li className={s.add}>
        <button onClick={addResidentHandler}>
          <AddIcon />
        </button>
      </li>
    </ul>
  )
}