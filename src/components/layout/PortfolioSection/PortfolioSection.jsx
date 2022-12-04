import Card from '../../commons/Card/Card'
import Title from '../../commons/Title/Title'
import './_PortfolioSection.scss'

const PortfolioSection = () => {
  return (
    <div className='container portfolio' id='proyectos'>
      <Title Type='h2'>Proyectos</Title>
      <Card />
      <Card flexDirection='rowReverse'/>
      <Card />
    </div>
  )
}

export default PortfolioSection