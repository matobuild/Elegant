import { useEffect, useState } from "react"
import ListboxOptions from "./ListboxOptions"
import ProductCard from "./ProductCard"
import { IProduct } from "../interface/productsResponse"
import { ProductsService } from "../services/ProductsService"
import SortOption from "./SortOption"
import ToolbarViewSelector from "./ToolbarViewSelector"

const ProductCatalogSection = () => {
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
    <section className=" px-40 pb-[100px] pt-[60px]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <p className=" text-neutral-4 body-2-semi">CATEGORIES</p>
              <div>
                <ListboxOptions />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-neutral-4 body-2-semi">PRICE</p>
              <div>
                <ListboxOptions />
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="flex items-center gap-8">
              <div>
                <SortOption />
              </div>
              <div>
                <ToolbarViewSelector />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-4 grid-rows-3 gap-6">
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
          <div className="flex justify-center">
            <button className=" button-s border-neutral-7 hover:border-neutral-4 hover:text-neutral-4 text-neutral-7 flex items-center rounded-[80px] border border-solid px-10 py-[6px]">
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCatalogSection
