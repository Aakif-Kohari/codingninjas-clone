import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import CoursesSection from '../components/CoursesSection'

function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Hero />
      <StatsBar />
      <CoursesSection />
    </div>
  )
}

export default Home
