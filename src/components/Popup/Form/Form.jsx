import s from './Form.module.scss'
import { CloseIcon } from './../../icons/close'

export const Form = props => {
  return (
    <div className={s.form}>
      <div className={s.wrapper}>
        <button onClick={props.closeForm} className={s.close}>
          <CloseIcon />
        </button>
        <form method="POST">
          <input required placeholder="Имя" name="name" type="text" />
          <input placeholder="Телефон" name="phone" type="text" />
          <input required placeholder="Email" name="email" type="email" />
          <button className={s.send} type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}