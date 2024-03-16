import { checkoutCartStore } from "../store/checkoutCartStore"
import CartRow from "./CartRow"

const CartTable = () => {
  const { checkoutCart } = checkoutCartStore()

  // const fetchData = async (productIds: number[]) => {
  //   const result: IProduct[] = []
  //   for (const id of productIds) {
  //     const data = await ProductsService.getSpecificProduct(id)
  //     if (data.data?.data) {
  //       result.push(data.data?.data)
  //     }
  //   }

  //   console.log("result=>", result)
  //   const a = result.map((e) => ({
  //     name: e?.name,
  //     price: e?.price,
  //     final_price: e?.final_price,
  //     image_url: e.image_url,
  //   }))

  //   const newData = checkoutCart.map((item, index) => ({
  //     ...item,
  //     ...a[index],
  //   }))

  //   updateCheckoutCart(newData)
  // }

  // useEffect(() => {
  //   // console.log("the checkoutCart is ------->", checkoutCart)
  //   const productsIdArray = checkoutCart.map((item) => item.product_id)
  //   fetchData(productsIdArray)
  // }, [])

  // console.log("checkoutCart", checkoutCart)
  return (
    <div className="flex w-full flex-col">
      <div className=" border-neutral-4 border-b border-solid pb-6">
        <div className="body-2-semi flex text-[#121212]">
          <div className="w-1/2">Product</div>
          <div className=" flex w-1/2 justify-between">
            <h2>Quantity</h2>
            <h2>Price</h2>
            <h2>Subtotal</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        {checkoutCart.map((item) => (
          <CartRow key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CartTable
