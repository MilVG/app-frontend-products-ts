import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type DetailsProps = {
  product: Product
}
export async function action({ params }: ActionFunctionArgs) {

  if (params.id !== undefined) {
    await deleteProduct(+params.id)
    return redirect('/')
  }
}
export default function Details({ product }: DetailsProps) {
  const fetcher = useFetcher()
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

          <fetcher.Form method="POST">
            <button
              type="submit"
              name="id"
              value={product.id}
              className={`${isAvailable ? 'text-black hover:bg-green-400' : 'text-red-700 hover:bg-red-300'}
              rounded-lg p-2 text-xs uppercase font-bold w-full border 
              border-black hover:cursor-pointer`}
            >
              {isAvailable ? 'Disponible' : 'No Disponible'}
            </button>
          </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            <button
              className="bg-indigo-700 text-white rounded-lg hover:bg-indigo-400 w-full"
              onClick={() => navigate(`/productos/${id}/editar`)}
            >
              Editar
            </button>

            <Form
              className="w-full"
              method="POST"
              action={`productos/${id}/eliminar`}
              onSubmit={(e) => {
                if (!confirm('¿Eliminar?')) {
                  e.preventDefault()
                }
              }}
            >
              <input
                className="bg-red-700 text-white rounded-lg hover:bg-red-400 w-full cursor-pointer"
                type="submit"
                value="Eliminar"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  )
}

