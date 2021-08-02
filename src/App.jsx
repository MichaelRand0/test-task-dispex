import { connect } from 'react-redux'
import './App.css'
import CompaniesContainer from './components/Companies/CompaniesContainer'
import { Popup } from './components/Popup/Popup'
import StreetsContainer from './components/Streets/StreetsContainer'

function App(props) {
  return (
    <div className="App">
      <div className="grey-bg"></div>
      <h1 className="App__title">Тестовое задание на позицию Frontend developer Junior/Middle</h1>
      {props.companyId ?  <StreetsContainer /> : <CompaniesContainer />}
      <Popup />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    companyId: state.companies.companyId
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getAuthThunk: () => dispatch(getAuthThunk()),
//     setInitializedThunk: () => dispatch(setInitializedThunk())
//   }
// }

export default connect(mapStateToProps, null)(App)
