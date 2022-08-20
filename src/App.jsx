import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }
  return (
    <ThemeContext.Provider >
    <div id={theme} >
     <Form />
    </div>
    </ThemeContext.Provider>
    
  )
}

export default App
