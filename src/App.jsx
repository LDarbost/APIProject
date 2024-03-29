import HeroSection from './HeroSection'
import NavBar from './NavBar'
import DataComponent from './WeatherComponent'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import Title from './Title'
import Favicon from './Favicon'

function App() {
   return (
    <>
       <Favicon></Favicon>
       <Title></Title>
       <NavBar></NavBar>
       <HeroSection></HeroSection>
       <FeaturesSection></FeaturesSection>
       <DataComponent></DataComponent>
       <Footer></Footer>
    </>
  )
}

export default App
