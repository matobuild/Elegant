import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import RightArrowLink from "./RightArrowLink"
import { ProductsService } from "../services/ProductsService"
import { IProduct } from "../interface/productsResponse"
import { Link } from "react-router-dom"
import useWishListCartList from "@/customHooks/useWishListCartList"

type ProductSectionProps = {
  title1?: string
  title2?: string
}

const ProductSection = ({ title1, title2 }: ProductSectionProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([])
  const { handleWishItem } = useWishListCartList()

  const handleAddOrRemoveWishList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    handleWishItem(e, id)
  }

  const getProducts = async () => {
    const data = await ProductsService.getProducts()
    // console.log("data status", data.data?.data)
    if (data && data.data) {
      setProductsList(data.data?.data)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className="pt-8 md:pt-12">
      <header className="px-8 md:px-40">
        <div className="flex items-end justify-between">
          <h4 className="md:heading-4-a heading-5">
            {title1}
            <br /> {title2}
          </h4>
          <Link className="hidden md:inline" to="/shop">
            <RightArrowLink name="More Products" />
          </Link>
        </div>
      </header>
      <div className=" flex flex-nowrap gap-6 overflow-x-auto py-10 pl-8 md:py-12 md:pl-40">
        {productsList.map((product) => {
          return (
            <div
              className=" flex-auto flex-shrink-0 flex-grow-0"
              key={product.product_id}
            >
              <ProductCard
                img={product.image_url}
                title={product.name}
                price={product.price}
                discount={product.discount}
                stars={product.total_stars_review}
                finalPrice={product.final_price}
                id={product.product_id}
                onAddOrRemove={handleAddOrRemoveWishList}
              />
            </div>
          )
        })}
      </div>
      <Link className="px-8 md:hidden " to="/shop">
        <RightArrowLink name="More Products" />
      </Link>
    </section>
  )
}
export default ProductSection
