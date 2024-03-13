import { useEffect, useState } from "react"
import { IProduct } from "../interface/productsResponse"
import { ProductsService } from "../services/ProductsService"

const useGetSpecificProduct = (id: number) => {
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

  return { specificProduct }
}

export default useGetSpecificProduct
