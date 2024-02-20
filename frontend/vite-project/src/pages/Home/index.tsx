import SliderSection from "../../components/SliderSection"
import NavBar from "../../components/NavBar"
import TopAlert from "../../components/TopAlert"
import BannerSection from "../../components/BannerSection"
import ProductSection from "../../components/ProductSection"

const HomePage = () => {
  return (
    <>
      <TopAlert />
      <NavBar />
      <SliderSection />
      <BannerSection />
      <ProductSection />
    </>
  )
}

export default HomePage
