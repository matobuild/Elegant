export const getImageUrl = (path: unknown) => {
  return new URL(`/assets/${path}`, import.meta.url).href
}
