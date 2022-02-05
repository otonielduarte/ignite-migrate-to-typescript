export interface FoodResponse {
  id: number
  name: string
  description: string
  price: string
  available: boolean
  image: string
}


export type FoodFormValues = Omit<FoodResponse, 'id'>