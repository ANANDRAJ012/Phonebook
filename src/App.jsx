import { useState } from 'react'
import './App.css'
import ContactCard from './components/ContactCard/ContactCard'


function App() {
const [darkMode, setDarkMode]= useState(false)  ;

  return (
    <>
    
      <ContactCard/>
    </>
  )
}

export default App
