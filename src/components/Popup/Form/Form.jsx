import s from './Form.module.scss'
import { CloseIcon } from './../../icons/close'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export const Forma = props => {
  const formikInitialValues = {
    name: '',
    phone: '',
    email: ''
  }
  return (
    <div className={s.forma}>
      <button onClick={props.closeForm} className={s.close}>
        <CloseIcon />
      </button>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={(values, { resetForm }) => {
          const resident = {
            name: values.name,
            phone: values.phone,
            email: values.email
          }
          props.closeForm()
          props.postResidentThunk(props.currentFlat, resident)
          props.getFlatsThunk(props.companyId, props.currentStreet, props.currentHouse)
        }}>
        <Form className={s.form}>
          <ErrorMessage name="name" />
          <Field required placeholder="Имя" className={s.field} name="name" label="Имя" />
          <Field placeholder="Телефон" className={s.field} name="phone" label="Телефон" />
          <Field required placeholder="Почта" className={s.field} name="email" label="Почта" />
          <button className={s.send} type="submit">Отправить</button>
        </Form>
      </Formik>
    </div>
  )
}