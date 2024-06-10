import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import AboutUs from "./pages/about"

const route = createBrowserRouter ([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
])




function App() {
  return (
    <RouterProvider router={route}/>
  )
}

export default App
