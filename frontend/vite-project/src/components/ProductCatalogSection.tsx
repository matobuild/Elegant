import { useEffect, useState } from "react"
import ListboxOptions, { listbox } from "./ListboxOptions"
import ProductCard from "./ProductCard"
import { IProduct } from "../interface/productsResponse"
import { KeyValue, ProductsService } from "../services/ProductsService"
import { ICategories } from "../interface/categoriesResponse"
import { CategoriesService } from "../services/CatagoriesService"
import SortOption from "./SortOption"
import ToolbarViewSelector from "./ToolbarViewSelector"
import { USDollar } from "../utils/utils"

const ProductCatalogSection = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([])

  const [categoriesBoxList, setCategoriesBoxList] = useState<listbox[]>([])
  const [selectedCategory, setSelectedCategory] = useState<listbox>({
    id: 0,
    name: "",
  })

  const [pricesBoxList, setPricesBoxList] = useState<listbox[]>([])
  const [selectedPrices, setSelectedPrices] = useState<listbox>({
    id: 0,
    name: "",
  })

  const getProducts = async () => {
    // change selectedCategory type to {category_id: selectedCategory.id}
    const param: KeyValue = { category_id: selectedCategory.id }
    const data = await ProductsService.getProducts(param)
    // console.log("data status", data?.data?.data)
    if (data?.data) {
      setProductsList(data?.data?.data)
    }
  }

  const getCategories = async () => {
    const data = await CategoriesService.getCategories()
    // console.log("data status", data.data?.data)
    if (data?.data?.data) {
      const categoriesList = data?.data?.data
      //convert type
      const convert: listbox[] = categoriesList.map((category: ICategories) => {
        return {
          id: category.category_id,
          name: category.name,
        }
      })
      setCategoriesBoxList(convert)
    }
  }

  const getPrices = async () => {
    const data = await ProductsService.getProducts()
    if (data?.data) {
      const priceList = data?.data?.data.map((item) => {
        return item.final_price
      })
      console.log("priceList", priceList)
      const maxPrice = Math.max(...priceList)
      console.log("maxPrice", maxPrice)
      // Define the range
      const range = 200
      // Calculate the number of divisions
      const divisions = Math.ceil(maxPrice / range)
      // Create an array to store the price ranges
      const priceRanges = []
      // Populate the array with the price ranges
      for (let i = 0; i < divisions; i++) {
        priceRanges.push({
          min: i * range,
          max: (i + 1) * range - 1,
        })
      }
      console.log("priceRanges", priceRanges)

      // If the max price is not a multiple of the range, adjust the last range
      // if (maxPrice % range !== 0) {
      //   priceRanges[priceRanges.length - 1].max = maxPrice
      //   console.log("priceRanges", priceRanges)
      // }
      // convert to listbox type
      const convertPriceRanges: listbox[] = priceRanges.map((range, index) => {
        return {
          id: index + 1,
          name: `${USDollar.format(range.min)} - ${USDollar.format(range.max)}`,
        }
      })
      const Ranges = [{ id: 0, name: "All" }, ...convertPriceRanges]
      console.log("convertPriceRanges", Ranges)

      setPricesBoxList(Ranges)
    }
  }
  useEffect(() => {
    getProducts()
    getCategories()
    getPrices()
  }, [])

  useEffect(() => {
    getProducts()
  }, [selectedCategory])

  return (
    <section className=" px-40 pb-[100px] pt-[60px]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <p className=" text-neutral-4 body-2-semi">CATEGORIES</p>
              <div>
                <ListboxOptions
                  list={categoriesBoxList}
                  selected={selectedCategory}
                  setSelected={setSelectedCategory}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-neutral-4 body-2-semi">PRICE</p>
              <div>
                <ListboxOptions
                  list={pricesBoxList}
                  selected={selectedPrices}
                  setSelected={setSelectedPrices}
                />
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
                  finalPrice={product.final_price}
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
