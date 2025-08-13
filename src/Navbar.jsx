function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar
