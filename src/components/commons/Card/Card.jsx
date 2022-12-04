import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'
import img1 from '../../../assets/img1.png'
import './_Card.scss'
import Button from '../Button/Button'

const Card = ({flexDirection}) => {
  return (
    <div className={`card card-${flexDirection}`}>
      <div className='card__info-project'>
        <Title Type='h3'>Nombre del proyecto</Title>
        <Paragraph>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</Paragraph>
        <Button variant='outline'>Ver proyecto</Button>
      </div>
      <div>
        <img src={img1} className='card__img' />
      </div>
    </div>
  )
}

export default Card