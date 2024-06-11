import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import AboutUs from "./pages/about"
import Catalog from "./pages/catalog"

const route = createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/catalog",
    element:<Catalog/>
  },
])




function App() {
  return (
    <RouterProvider router={route}/>
  )
}

export default App
