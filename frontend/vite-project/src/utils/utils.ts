export const getImageUrl = (path: never) => {
  return new URL(`/assets/${path}`, import.meta.url).href
}
