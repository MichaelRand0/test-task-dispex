import s from './Companies.module.scss'
import { Company } from './Company/Company'

export const Companies = props => {

  const companiesElements = props.companiesArr.map(item => {
    return <Company {...props} id={item.id} name={item.name} key={item.id} />
  })
  return (
    <>
    <h2 className={s.title}>Выберите управляющую компанию</h2>
    <ul className={s.companies}>
      {companiesElements}
    </ul>
    </>
  )
}