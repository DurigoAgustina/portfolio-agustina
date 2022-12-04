import './_Footer.scss'
import email from '../../../assets/email.svg'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'
import Title from '../../commons/Title/Title'
import Img from '../../commons/Img/Img'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container' id='contacto'>
        <Title Type='h2'>Contacto</Title>
        <div className='footer__icons'>
          <a href='mailto:agustinadurigo@gmail.com'>
            <Img image={email}/>
          </a>
          <a href='https://github.com/DurigoAgustina'>
            <Img image={github}/>
          </a>
          <a href='https://www.linkedin.com/in/agustinadurigo/'>
            <Img image={linkedin}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer