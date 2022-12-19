import { useState } from 'react'
import './_Header.scss'
const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='header'>
      <div className='container header__container'>
        <div className='header__logo'>
          <a href="#inicio">
            <h3>Agustina Durigo</h3>
          </a>
        </div>
        <nav>
          <ul className={`header__nav ${isOpen && 'open' }`}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className={`header__toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header