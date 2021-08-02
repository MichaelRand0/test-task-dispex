import s from './Company.module.scss'

export const Company = props => {
  const companyHandler = () => {
    props.changeCompanyId(props.id)
  }
  return (
    <button onClick={companyHandler} id={props.id} className={s.company}>{props.name}</button>
  )
}