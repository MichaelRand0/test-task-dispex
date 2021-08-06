import s from './Company.module.scss'

export const Company = props => {
  const companyHandler = e => {
    props.changeCompanyId(props.id)
    props.setIsLoadingTrue()
    props.getStreetsThunk(e.target.id).then(() => {
      props.setIsLoadingFalse()
    })
  }
  return (
    <button onClick={e => companyHandler(e)} id={props.id} className={s.company}>{props.name}</button>
  )
}