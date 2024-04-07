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
import { useSearchParams } from "react-router-dom"

const ProductCatalogSection = () => {
  const [searchParams] = useSearchParams()
  console.log(Number(searchParams.get("categoryId")))

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
  const [priceRange, setPriceRange] = useState<
    {
      min: number
      max: number
    }[]
  >([])

  const [page, setPage] = useState(1)

  const sortBoxList = [
    { name: "Sort by" },
    { name: "ascending", paramName: "asc" },
    { name: "descending", paramName: "desc" },
  ]
  const [selectedSort, setSelectedSort] = useState(sortBoxList[0])

  const getProducts = async () => {
    // change selectedCategory type to {category_id: selectedCategory.id}
    const param: KeyValue = {}
    // console.log("selectedCategory--->", selectedCategory)
    if (selectedCategory.id) {
      param["category_id"] = selectedCategory.id
    }

    if (
      priceRange[selectedPrices.id]?.min !== undefined &&
      priceRange[selectedPrices.id]?.max !== undefined &&
      priceRange[selectedPrices.id].min !== -1 &&
      priceRange[selectedPrices.id].max !== -1
    ) {
      param["minPrice"] = priceRange[selectedPrices.id].min
      param["maxPrice"] = priceRange[selectedPrices.id].max
    }

    if (page > 1) {
      param["page"] = page
    }

    if (selectedSort.name !== "Sort by") {
      param["orderBy"] = `final_price:${selectedSort.paramName}`
    }

    console.log("param------>", param)

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
      convert.unshift({ id: 0, name: "All" })
      setCategoriesBoxList(convert)
      setSelectedCategory(convert[0])
      return convert
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
      priceRanges.unshift({
        min: -1,
        max: -1,
      })
      setPriceRange(priceRanges)

      // convert to listbox type
      const convertPriceRanges: listbox[] = priceRanges.map((range, index) => {
        if (range.min === -1) {
          return {
            id: index,
            name: "All",
          }
        }
        return {
          id: index,
          name: `${USDollar.format(range.min)} - ${USDollar.format(range.max)}`,
        }
      })
      console.log("convertPriceRanges", convertPriceRanges)

      setPricesBoxList(convertPriceRanges)
      setSelectedPrices(convertPriceRanges[0])
    }
  }

  const getMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    getPrices()
    getCategories().then((categoriesList) => {
      const selectedCategoryId = Number(searchParams.get("categoryId"))
      const selected = categoriesList?.find((e) => e.id === selectedCategoryId)
      if (selected) {
        setSelectedCategory(selected)
      }
    })
  }, [])

  useEffect(() => {
    getProducts()
  }, [selectedCategory, selectedPrices, page, selectedSort])

  // console.log("latest--->", selectedCategory, categoriesBoxList)

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
                  setSelected={(category) => {
                    setSelectedCategory(category)
                  }}
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
                <SortOption
                  list={sortBoxList}
                  selected={selectedSort}
                  setSelected={setSelectedSort}
                />
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
                  id={product.product_id}
                />
              )
            })}
          </div>
          <div className="flex justify-center">
            <button
              onClick={getMore}
              className=" button-s border-neutral-7 hover:border-neutral-4 hover:text-neutral-4 text-neutral-7 flex items-center rounded-[80px] border border-solid px-10 py-[6px]"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCatalogSection
