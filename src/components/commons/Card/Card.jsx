import Title from '../Title/Title'
import './_Card.scss'
import Button from '../Button/Button'
import Img from '../Img/Img'

const Card = ({ title, img, href}) => {
  console.log(href)
  return (
    <div className='card container'>
      <div>
        <Img image={img} className='card__img' />
      </div>
      <div className='card__info-project'>
        <Title Type='h3'>{title}</Title>
        <Button variant='outline'><a href={href} target='_blank'>Ver proyecto</a></Button>
      </div>
    </div>
  )
}

export default Card