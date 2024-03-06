import ProductDetailSection from "../../components/ProductDetailSection"
import ProductSection from "../../components/ProductSection"

const DetailPage = () => {
  return (
    <>
      <ProductDetailSection />
      <div className=" pb-20">
        <ProductSection title1="You might also like" />
      </div>
    </>
  )
}

export default DetailPage
