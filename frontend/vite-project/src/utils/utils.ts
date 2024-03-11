export const getImageUrl = (path: unknown) => {
  return new URL(`/assets/${path}`, import.meta.url).href
}

export const getImageFromData = (path: unknown) => {
  return new URL(`../../../../backend2/assets/${path}`, import.meta.url).href
}

export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export const token = localStorage.getItem("token")
