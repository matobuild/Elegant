import { create } from "zustand"
import { ICheckoutCart } from "../interface/cartResponse"
import { choice } from "../components/MyRadioGroup"

export type cartObject = { product_id: number; quantity: number }
export type checkoutCartRow = { cartitem_id: number; quantity: number }

type cartSummaryType = { subtotal: number; total: number; plan: choice }

type checkoutCartStoreType = {
  checkoutCart: ICheckoutCart[]
  updateCheckoutCart: (value: ICheckoutCart[]) => void
  cartSummary: cartSummaryType
  updateCartSummary: (value: cartSummaryType) => void
}

export const checkoutCartStore = create<checkoutCartStoreType>((set) => ({
  checkoutCart: [],
  updateCheckoutCart: (value: ICheckoutCart[]) => {
    set({ checkoutCart: value })
  },
  cartSummary: {
    subtotal: 0,
    total: 0,
    plan: { id: NaN, name: "", price: "$0.00", amount: NaN },
  },
  updateCartSummary: (value: cartSummaryType) => {
    set({ cartSummary: value })
  },
}))
