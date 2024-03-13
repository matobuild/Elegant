import { useLocation } from "react-router-dom"
import ProductDetailSection from "../../components/ProductDetailSection"
import ProductSection from "../../components/ProductSection"
import useGetSpecificProduct from "../../customHooks/useGetSpecificProduct"

const DetailPage = () => {
  const location = useLocation()
  const id: number = location.state.id
  const { specificProduct } = useGetSpecificProduct(id)

  return (
    <>
      <ProductDetailSection specificProduct={specificProduct} />
      <div className=" pb-20">
        <ProductSection title1="You might also like" />
      </div>
    </>
  )
}

export default DetailPage
