import About from "./components/About"
import Contact from "./components/Contact"
import Dishes from "./components/Dishes"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Missions from "./components/Missions"
import Navbar from "./components/Navbar"
import Review from "./components/Review"


 const App = () => {
  return (
  <main className=" overflow-y-hidden text-neutral-200 antialiased">
  <Hero />
 <Navbar />
 <Dishes/>
 <About />
 <Missions />
 <Expertise />
 <Review />
 <Contact />
 <Footer />
  </main>
  )
}
export default App