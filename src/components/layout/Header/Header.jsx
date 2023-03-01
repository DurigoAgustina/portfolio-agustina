import { useState } from 'react'
import { menu } from '../../../utils/menu'
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
            {
              menu.map(({id, category, href}) => (
                <li key={id}> <a href={`#${href}`}>{category}</a></li>
              ))
            }
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