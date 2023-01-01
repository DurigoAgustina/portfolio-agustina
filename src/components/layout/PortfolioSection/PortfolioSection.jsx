
import Title from '../../commons/Title/Title'
import GridCard from '../../layout/GridCard/GridCard'
import './_PortfolioSection.scss'

const PortfolioSection = () => {

  return (
    <div className='container portfolio' id='proyectos'>
      <Title Type='h1'>Proyectos</Title>
      <GridCard />
    </div>
  )
}

export default PortfolioSection