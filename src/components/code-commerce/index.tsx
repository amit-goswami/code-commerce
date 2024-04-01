import { Analytic } from './components/Analytic'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { NavBar } from './components/NavBar'
import { NewsLetter } from './components/NewsLetter'

export const CodeCommerceComponent = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Analytic />
      <NewsLetter />
      <Cards />
      <Footer />
    </main>
  )
}
