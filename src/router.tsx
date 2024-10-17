import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products,{loader as ProductLoader} from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";

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
      }
    ]
  }
])
