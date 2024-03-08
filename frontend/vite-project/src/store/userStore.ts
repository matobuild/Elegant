import { create } from "zustand"

type cartType = { productId: number; quantity: number }

type userStoreType = {
  cart: cartType[]
  addToCart: (value: cartType) => void
}

export const userStore = create<userStoreType>((set) => ({
  cart: [],
  addToCart: (value: cartType) => {
    set((state) => ({
      cart: [...state.cart, value],
    }))
  },
}))
