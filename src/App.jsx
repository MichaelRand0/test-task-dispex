import { connect } from 'react-redux'
import './App.css'
import CompaniesContainer from './components/Companies/CompaniesContainer'
import PopupContainer from './components/Popup/PopupContainer'
import { Preloader } from './components/Preloader/Preloader'
import StreetsContainer from './components/Streets/StreetsContainer'
import { setIsLoadingFalse, setIsLoadingTrue } from './redux/reducers/appReducer';

const App = props => {
  const activeLoadingClass = props.isLoading ? 'App_preloader-active' : ''
  return (
    <div className={`App ${activeLoadingClass} ${props.isPopupOpen ? `App_popup-active` : ``}`}>
      <div className="grey-bg"></div>
      <h1 className="App__title">Тестовое задание на позицию Frontend developer Junior/Middle</h1>
      {props.companyId ?
       <StreetsContainer 
       setIsLoadingTrue={props.setIsLoadingTrue} 
       setIsLoadingFalse={props.setIsLoadingFalse} /> : 
       <CompaniesContainer 
       setIsLoadingTrue={props.setIsLoadingTrue} 
       setIsLoadingFalse={props.setIsLoadingFalse} />}
      <PopupContainer />
      <Preloader />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    companyId: state.companies.companyId,
    isLoading: state.app.isLoading,
    isPopupOpen: state.popup.isPopupOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsLoadingTrue: () => dispatch(setIsLoadingTrue()),
    setIsLoadingFalse: () => dispatch(setIsLoadingFalse())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
