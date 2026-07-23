// ...existing code...
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Skills from './components/Skills'
import BlurBlob from './components/BlurBlob'
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <div className='bg-gradient-to-r from-violet-950 via-violet-700 to-indigo-900'>
        <BlurBlob position={{top: '10%', left:'50%'}} size={{width:'40%', height:'40%'}}></BlurBlob>
          <div >
        <div className="inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <Navbar/>
            <About/>
        </div>
        <div className="min-h-screen w-full bg-[linear-gradient(to_bottom,#3b207a_0%,#2a174d_12%,#1b1527_30%,#121218_60%,#09090b_100%)] pt-8 px-5 py-24 clip-path-custom">
          {/* <div className="min-h-screen w-full bg-[linear-gradient(to_bottom,oklch(0.36_0.17_286.96)_0%,oklch(0.33_0.15_286.96)_12%,#2a174d_28%,#1b1527_55%,#121218_78%,#09090b_100%)] pt-8 px-5 py-24 clip-path-custom"></div> */}
            <Skills/>
        </div>
        <div className="relative min-h-screen w-full bg-slate-950 clip-path-custom-2 clip-path-custom-3">
         <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
         </div>
            <Work/>
        </div>
       <div className="relative min-h-screen w-full bg-slate-950 clip-path-custom-2">
         <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
         </div>
            <Education/>
        </div>
        <div>
            <Contact/>
        </div>
            <Footer/>
          </div>
          <Analytics />
      </div>
    </>
  )
}

export default App
// ...existing code...