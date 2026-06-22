import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'

function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <StatsBar />
    </div>
  )
}

export default Home
