import FeatureSection from "./components/FeatureSection";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Worklow from "./components/Worklow";

export function App () {
  return(
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    </div>
    <FeatureSection/>

    <Worklow></Worklow>
    <Pricing></Pricing>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default App;