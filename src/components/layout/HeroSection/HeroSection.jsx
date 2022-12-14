import Title from '../../commons/Title/Title'
import developer from '../../../assets/developer.svg'
import './_HeroSection.scss'
import Button from '../../commons/Button/Button'
import CV from '../../../../public/CV-AGUSTINA-DURIGO.pdf'

const HeroSection = () => {
  return (
    <section className='container hero' id='inicio'>
        <div className='hero__title'>
          <Title Type='h3' color='brand'>FRONTEND DEVELOPER</Title>
          <Title Type='h1'>Agustina Durigo</Title>
          <div className='hero__button'>
            <Button variant='primary'> <a href='#proyectos'>Proyectos</a></Button>
            <a href={CV} download='CV-Agustina-Durigo'><Button variant='outline'>Descargar CV</Button></a>
          </div>
        </div>

        <div className='hero__image'>
          <img src={developer} />
        </div>
    </section>
  )
}

export default HeroSection