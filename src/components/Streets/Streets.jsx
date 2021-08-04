import { Street } from './Street/Street'
import s from './Streets.module.scss'

export const Streets = props => {
  const streetsElements = props.streets.map(item => {
    return <Street {...props} isOpen={item.isOpen} key={item.streetId} streetId={item.streetId} streetName={item.streetName} houses={item.houses} />
  })
  return (
    <ul className={s.streets}>
      {streetsElements}
    </ul>
  )
}