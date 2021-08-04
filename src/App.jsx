import { connect } from 'react-redux'
import './App.css'
import CompaniesContainer from './components/Companies/CompaniesContainer'
import PopupContainer from './components/Popup/PopupContainer'
import { Preloader } from './components/Preloader/Preloader'
import StreetsContainer from './components/Streets/StreetsContainer'

function App(props) {
  return (
    <div className={`App ${props.isPopupOpen ? `App_popup-active` : ``}`}>
      <div className="grey-bg"></div>
      <h1 className="App__title">Тестовое задание на позицию Frontend developer Junior/Middle</h1>
      {props.companyId ? <StreetsContainer /> : <CompaniesContainer />}
      <PopupContainer />
      <Preloader />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    companyId: state.companies.companyId,
    isPopupOpen: state.popup.isPopupOpen
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getAuthThunk: () => dispatch(getAuthThunk()),
//     setInitializedThunk: () => dispatch(setInitializedThunk())
//   }
// }

export default connect(mapStateToProps, null)(App)
