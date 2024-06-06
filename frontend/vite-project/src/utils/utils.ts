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

export function extractDate(timestamp: string) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0") // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}
