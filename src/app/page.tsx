
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
// import Features from '@/components/ui/Features'
import Templates from '@/components/ui/Templates'
import CallToAction from '@/components/ui/CallToAction'
import Footer from '@/components/ui/Footer'



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <Templates />
      <CallToAction />
      <Footer />
    </div>
  )
}

