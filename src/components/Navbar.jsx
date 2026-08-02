import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

// Navbar shown on every page
// Uses NavLink so the active page link gets highlighted automatically
function Navbar() {
  // state to toggle the mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Speedster<span>Bikes</span>
        </NavLink>

        {/* Hamburger button for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={menuOpen ? 'navbar-links active' : 'navbar-links'}>
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bikes" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Bikes
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
