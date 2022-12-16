import Paragraph from '../../commons/Paragraph/Paragraph'
import Title from '../../commons/Title/Title'
import uiDesign from '../../../assets/ui-designing.svg'
import html from '../../../assets/html.svg'
import css from '../../../assets/css.svg'
import javascript from '../../../assets/javascript.svg'
import sass from '../../../assets/sass.svg'
import react from '../../../assets/react.svg'
import './_AboutSection.scss'
import Img from '../../commons/Img/Img'

const AboutSection = () => {
  return (
    <section className='container about' id='sobre-mi'>
      <div className='about__me'>
        <Title Type='h1'>Sobre mí</Title>
        <Paragraph>Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</Paragraph>
        <div className='about__icons'>
          <Img icon image={html} />
          <Img icon image={css} />
          <Img icon image={sass} />
          <Img icon image={javascript} />
          <Img icon image={react} />
        </div>
      </div>

      <div className='about__image'>
        <img src={uiDesign}/>
      </div>
    </section>
  )
}

export default AboutSection