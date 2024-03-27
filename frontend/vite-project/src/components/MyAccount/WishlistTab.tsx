import { useEffect, useState } from "react"
import { USDollar, getImageFromData } from "../../utils/utils"
import { wishListCartStore } from "../../store/wishListCartStore"
import { ProductsService } from "../../services/ProductsService"
import { IProduct } from "../../interface/productsResponse"
import { WishlistService } from "../../services/WishlistService"
import { CartService } from "../../services/CartService"
import useGetCheckoutCartList from "../../customHooks/useGetCheckoutCartList"

const WishlistTab = () => {
  const [wishListTable, setWishListTable] = useState<IProduct[]>([])
  const { wishListCartsIds, updateWishListCartsIds } = wishListCartStore()
  const { getCheckoutCartList } = useGetCheckoutCartList()

  const getWishlistDetails = async () => {
    const result: IProduct[] = []
    for (const id of wishListCartsIds) {
      const data = await ProductsService.getSpecificProduct(id)
      if (data.data?.data) {
        result.push(data.data?.data)
      }
    }
    setWishListTable(result)
  }
  // console.log("wishListTable", wishListTable)

  const removeItem = async (product: IProduct) => {
    updateWishListCartsIds(
      wishListCartsIds.filter((idNumber) => idNumber !== product.product_id),
    )
    await WishlistService.deleteWishlistCart(product.product_id)
  }

  const addToCart = async (product: IProduct) => {
    await CartService.postCheckoutCart({
      product_id: product.product_id,
      quantity: 1,
    })
    getCheckoutCartList()

    removeItem(product)
  }

  useEffect(() => {
    getWishlistDetails()
  }, [wishListCartsIds])

  return (
    <div className=" px-[72px]">
      <div className=" flex flex-col gap-10 ">
        <p className="text-primary-1 body-1-semi">Your Wishlist</p>
        <div className=" flex flex-col">
          <div className=" border-neutral-3 caption-1 text-neutral-4 flex items-center justify-around border-b border-solid pb-2">
            <p className=" w-1/3 pl-8">Product</p>
            <p className=" w-1/3">Price</p>
            <p className=" w-1/3">Action</p>
          </div>
          {wishListTable.map((product) => {
            return (
              <div
                key={product.product_id}
                className=" border-neutral-3 flex items-center justify-around border-b border-solid py-6  "
              >
                <div className=" w-1/3">
                  <div className="flex items-center gap-[10px] ">
                    <button onClick={() => removeItem(product)}>
                      <svg
                        className="hover:stroke-neutral-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                          fill="#6C7275"
                        />
                      </svg>
                    </button>
                    <div className=" flex items-center gap-4">
                      <div className=" h-[72px] w-[60px]">
                        <img
                          className=" h-full w-full object-cover"
                          src={getImageFromData(`${product.image_url}`)}
                          alt=""
                        />
                      </div>
                      <p className=" caption-1-semi text-neutral-7">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-1/3">
                  <p className=" caption-1 text-neutral-7">
                    {USDollar.format(Number(product.final_price))}
                  </p>
                </div>
                <div className=" w-1/3">
                  <button
                    className="bg-neutral-7  rounded-lg px-6 py-[6px] text-white"
                    onClick={() => {
                      addToCart(product)
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WishlistTab
