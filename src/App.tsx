import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GameScreen from './app/pages/screen/GameScreen'
import { Provider } from 'react-redux'
import { store } from "./app/shared/store"

function App() {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  )
}

export default App
