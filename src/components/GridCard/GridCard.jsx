import React from 'react'
import cards from '../../utils/cards'
import Card from '../commons/Card/Card'
import './_GridCard.scss'

const GridCard = () => {
  return (
    <div className='gridcard'>
      {
        cards.map( ({id, image, title, paragraph}) => (
          <Card
            title={title}
            paragraph={paragraph}
            img={image}
            key={id}
          />
        ))
      }
    </div>
  )
}

export default GridCard