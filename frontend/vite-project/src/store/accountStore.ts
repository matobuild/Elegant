import { create } from "zustand"

type accountStoreType = {
  isLogin: boolean
  login: () => void
  logout: () => void
}

export const accountStore = create<accountStoreType>((set) => ({
  isLogin: false,
  login: () => {
    set({ isLogin: true })
  },
  logout: () => {
    set({ isLogin: false })
  },
}))
