import { create } from "zustand"
import { ICheckoutCart } from "../interface/cartResponse"

export type cartObject = { product_id: number; quantity: number }

type checkoutCartStoreType = {
  checkoutCart: ICheckoutCart[]
  updateCheckoutCart: (value: ICheckoutCart[]) => void
}

export const checkoutCartStore = create<checkoutCartStoreType>((set) => ({
  checkoutCart: [],
  updateCheckoutCart: (value: ICheckoutCart[]) => {
    set({ checkoutCart: value })
  },
}))
