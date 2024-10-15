import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to="productos/nuevo"
          className="bg-indigo-600 text-white p-3 text-sm uppercase font-bold rounded-md shadow-sm hover:bg-indigo-700 transition-colors"
        >
          Agregar Producto
        </Link>
      </div>
    </>
  )
}

