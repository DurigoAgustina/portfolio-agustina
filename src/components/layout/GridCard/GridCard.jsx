import React from 'react'
import cards from '../../../utils/cards'
import Card from '../../commons/Card/Card'
import './_GridCard.scss'

const GridCard = () => {
  return (
    <div className='gridcard'>
      {
        cards.map( ({id, image, title, href}) => (
          <Card
            title={title}
            img={image}
            href={href}
            key={id}
          />
        ))
      }
    </div>
  )
}

export default GridCard