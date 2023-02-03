import { useState } from 'react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import auth from './config'
import Home from './home'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const navigate = useNavigate()
  async function login(){
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    navigate (`/home/${data.user.email}`)
  }
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1><marquee> Aplikasi By Kafita</marquee></h1>
     <button onClick={login}>Login</button>
    </div>
  )
}


export default App
