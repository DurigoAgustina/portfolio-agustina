import AboutSection from '../../components/layout/AboutSection/AboutSection'
import Footer from '../../components/layout/Footer/Footer'
import Header from '../../components/layout/Header/Header'
import HeroSection from '../../components/layout/HeroSection/HeroSection'
import PortfolioSection from '../../components/layout/PortfolioSection/PortfolioSection'
import './_HomePage.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </>
  )
}

export default HomePage