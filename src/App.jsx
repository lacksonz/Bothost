import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import JsonEditor from './components/JsonEditor'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="title">Welcome to my stuff</h1>
      <About />
      <JsonEditor />
    </div>
  )
}

export default App
