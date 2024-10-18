import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as ProductLoader } from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction } from "./views/EditProduct";
import { action as deleteProductAction } from "./components/Details";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: ProductLoader
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: 'productos/:id/editar',
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction

      }
    ]
  }
])
