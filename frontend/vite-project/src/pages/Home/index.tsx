import SliderSection from "../../components/SliderSection"
import NavBar from "../../components/NavBar"
import TopAlert from "../../components/TopAlert"
import BannerSection from "../../components/BannerSection"
import ProductSection from "../../components/ProductSection"
import ValuesSection from "../../components/ValueSection/ValuesSection"
import LeftImageFillerSection from "../../components/LeftImageFillerSection"
import { NewsLetterSection } from "../../components/NewsLetterSection"

const HomePage = () => {
  return (
    <>
      <TopAlert />
      <NavBar />
      <SliderSection />
      <BannerSection />
      <ProductSection />
      <ValuesSection />
      <LeftImageFillerSection />
      <NewsLetterSection />
    </>
  )
}

export default HomePage
