import Navbar from "./components/Navbar";
// import ParticleBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor";
import Home from "./Section/Home"
import About from "./Section/About"
import Contact from "./Section/Contact"
import Skills from "./Section/Skills"
import Footer from "./Section/Footer"
import Projects from "./Section/Projects"
import Testimonials from "./Section/Testimonials"
import IntroAnimation from "./components/IntroAnimation";
import React from "react";




export default function App() {

  const [introDone, setIntroDone] = React.useState(false)

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div className="relative min-h-screen gradient text-white">
          <CustomCursor />
          {/* <ParticleBackground />   */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Testimonials />
          {/* <IntroAnimation /> */}

        </div>
      )}
    </>
  )

}