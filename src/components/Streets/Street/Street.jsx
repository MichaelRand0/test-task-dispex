import { Houses } from '../../Houses/Houses'
import { Toggle } from '../../Toggle/Toggle'
import s from './Street.module.scss'

export const Street = (props) => {
  const toggleClickHandler = () => {
    props.getHousesThunk(props.companyId, props.streetId)
    props.toggleStreetMenu(props.streetId)
    props.setCurrentStreet(props.streetId)
  }
  return (
    <li id={props.streetId} className={`${s.street} ${props.isOpen ? s.street_opened : ''}`}>
      <div className={s.heading}>
        <h2 className={s.name}>{`Улица ${props.streetName}`}</h2>
        <Toggle clickHandler={toggleClickHandler} isOpen={props.isOpen} />
      </div>
      <Houses {...props} />
    </li>
  )
}