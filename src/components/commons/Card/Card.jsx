import Title from '../Title/Title'
import Paragraph from '../Paragraph/Paragraph'
import './_Card.scss'
import Button from '../Button/Button'
import Img from '../Img/Img'
import { Link } from 'react-router-dom'

const Card = ({ title, img, paragraph}) => {

  return (
    <div className='card container'>
      <div>
        <Img image={img} className='card__img' />
      </div>
      <div className='card__info-project'>
        <Title Type='h3'>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
        <Button variant='outline'><Link to='/'>Ver proyecto</Link></Button>
      </div>
    </div>
  )
}

export default Card