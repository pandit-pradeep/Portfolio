import Navbar from "./components/Navbar";
// import ParticleBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor";
import Home from "./Section/Home";



export default function App() {


  return (
    <div className="relative min-h-screen gradient text-white">
      <CustomCursor />
      {/* <ParticleBackground />   */}
      <Navbar />
      <Home />
    
    </div>
  )

}