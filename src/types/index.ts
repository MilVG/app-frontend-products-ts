import { object, string, number, boolean, InferOutput, array } from "valibot"
export const DraftProductSchema = object({
  name: string(),
  price: number()
})

export const ProudctSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean()
})

export const ProductsSchema = array(ProudctSchema)
export type Product = InferOutput<typeof ProudctSchema>
