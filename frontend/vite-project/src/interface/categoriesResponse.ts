export interface ICategories {
  category_id: number
  name: string
}

export interface ICategoriesResponse {
  status: string
  data: ICategories[]
}
