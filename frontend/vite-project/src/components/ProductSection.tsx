import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import RightArrowLink from "./RightArrowLink"
import { ProductsService } from "../services/ProductsService"
import { IProduct } from "../interface/productsResponse"

const ProductSection = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([])

  const getProducts = async () => {
    const data = await ProductsService.getProducts()
    console.log("data status", data.data?.data)
    if (data && data.data) {
      setProductsList(data.data?.data)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className="pt-12">
      <header className="px-40">
        <div className="flex items-end justify-between">
          <h4 className="heading-4 ">
            New
            <br /> Arrivals
          </h4>
          <RightArrowLink name="More Products" />
        </div>
      </header>
      <div className=" flex gap-6 py-12 pl-40">
        {productsList.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              img={product.image_url}
              title={product.name}
              price={product.price}
              discount={product.discount}
              stars={product.total_stars_review}
            />
          )
        })}
      </div>
    </section>
  )
}
export default ProductSection
