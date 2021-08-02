import './App.css'
import { Popup } from './components/Popup/Popup'
import StreetsContainer from './components/Streets/StreetsContainer'

function App() {
  return (
    <div className="App">
      <div className="grey-bg"></div>
      <h1 className="App__title">Тестовое задание на позицию Frontend developer Junior/Middle</h1>
      <StreetsContainer />
      <Popup />
    </div>
  )
}

export default App
