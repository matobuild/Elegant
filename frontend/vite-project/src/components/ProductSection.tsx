import ProductCard from "./ProductCard"
import RightArrowLink from "./RightArrowLink"

const ProductSection = () => {
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
      <div className=" py-12 pl-40">
        {/* need to finish  */}
        <ProductCard />
      </div>
    </section>
  )
}
export default ProductSection
