import SliderSection from "../../components/SliderSection"
import NavBar from "../../components/NavBar"
import BannerSection from "../../components/BannerSection"
import ProductSection from "../../components/ProductSection"
import ValuesSection from "../../components/ValueSection/ValuesSection"
import LeftImageFillerSection from "../../components/LeftImageFillerSection"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SliderSection />
      <BannerSection />
      <ProductSection />
      <ValuesSection />
      <LeftImageFillerSection />
    </>
  )
}

export default HomePage
