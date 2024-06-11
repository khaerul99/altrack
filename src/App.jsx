import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import AboutUs from "./pages/about"
import Catalog from "./pages/catalog"
import Contact from "./pages/contact"

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
  {
    path:"/contact",
    element:<Contact/>
  },
])




function App() {
  return (
    <RouterProvider router={route}/>
  )
}

export default App
