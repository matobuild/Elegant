import { useLocation } from "react-router-dom"
import ProductDetailSection from "../../components/ProductDetailSection"
import ProductSection from "../../components/ProductSection"
import { useEffect, useState } from "react"
import { ProductsService } from "../../services/ProductsService"
import { IProduct } from "../../interface/productsResponse"

const DetailPage = () => {
  const location = useLocation()
  const id: number = location.state.id

  const [specificProduct, setSpecificProduct] = useState<IProduct>({
    product_id: NaN,
    name: "",
    description: "",
    price: NaN,
    final_price: NaN,
    image_url: "",
    measurements: "",
    details: "",
    packaging: "",
    stock: NaN,
    total_stars_review: NaN,
    discount: NaN,
    category_id: NaN,
    categories: {
      category_id: NaN,
      name: "",
    },
  })

  const getSpecificProduct = async () => {
    const data = await ProductsService.getSpecificProduct(id)
    if (data?.data) {
      setSpecificProduct(data.data.data)
    }
  }

  useEffect(() => {
    getSpecificProduct()
  }, [id])

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
