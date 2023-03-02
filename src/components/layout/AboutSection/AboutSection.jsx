import Paragraph from '../../commons/Paragraph/Paragraph'
import Title from '../../commons/Title/Title'
import uiDesign from '../../../assets/ui-designing.svg'
import html from '../../../assets/html.svg'
import css from '../../../assets/css.svg'
import javascript from '../../../assets/javascript.svg'
import sass from '../../../assets/sass.svg'
import react from '../../../assets/react.svg'
import styledComponents from '../../../assets/styledComponents.png'
import './_AboutSection.scss'
import Img from '../../commons/Img/Img'

const AboutSection = () => {
  return (
    <section className='container about' id='sobre-mi'>
      <div className='about__me'>
        <Title Type='h1'>Sobre mí</Title>
        <Paragraph>Hola! Soy frontend developer y amo desarrollar interfaces de usuarios con React y SASS / Styled Components.</Paragraph>
        <Paragraph>Soy una apasionada por la programación y me encanta el diseño UX/UI.</Paragraph>
        <Paragraph>Estoy en búsqueda constante de desafíos que me empujen a superarme y crecer.</Paragraph>
        <div className='about__icons'>
          <Img icon image={html} />
          <Img icon image={css} />
          <Img icon image={sass} />
          <Img icon image={javascript} />
          <Img icon image={react} />
          <Img icon image={styledComponents} />
        </div>
      </div>

      <div className='about__image'>
        <img src={uiDesign}/>
      </div>
    </section>
  )
}

export default AboutSection