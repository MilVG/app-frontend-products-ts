import { useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"

type DetailsProps = {
  product: Product
}
export default function Details({ product }: DetailsProps) {
  const navigate = useNavigate()

  const { id, name, price } = product
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
          <div className="flex gap-2 items-center">
            <button
              className="bg-indigo-700 text-white rounded-lg hover:bg-indigo-400 w-full"
              onClick={() => navigate(`/productos/${id}/editar`)}
            >
              Editar
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

