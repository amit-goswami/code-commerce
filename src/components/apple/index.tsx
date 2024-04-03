import { Hero } from './components/Hero'
import { HightLights } from './components/HighLights'
import { NavBar } from './components/NavBar'

export const AppleComponent = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HightLights />
    </main>
  )
}
