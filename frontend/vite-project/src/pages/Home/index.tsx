import SliderSection from "../../components/SliderSection"
import BannerSection from "../../components/BannerSection"
import ProductSection from "../../components/ProductSection"
import ValuesSection from "../../components/ValueSection/ValuesSection"
import LeftImageFillerSection from "../../components/LeftImageFillerSection"

const HomePage = () => {
  return (
    <>
      <SliderSection />
      <BannerSection />
      <ProductSection title1="New" title2="Arrivals" />
      <ValuesSection />
      <LeftImageFillerSection />
    </>
  )
}

export default HomePage
