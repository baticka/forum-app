import { Provider } from "react-redux";
import './App.css'

import AppRouter from './navigation/Router'
import { store } from './store/store'


function App() {
  return (
  <Provider store={store} >
      <div className='App'>
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
