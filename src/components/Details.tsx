import { Product } from "../types"
import { formatCurrency } from "../utils"

type DetailsProps = {
product:Product
}
export default function Details({product}:DetailsProps) {
  const {name,price} = product
  const isAvailable = product.availability
  return (
    <>
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
          {name}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {formatCurrency(price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {isAvailable ? 'Disponible' : 'No Disponible'}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
           acciones
        </td>
    </tr>
    </>
  )
}

