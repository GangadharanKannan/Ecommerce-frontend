import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import './index.css'
import Footer from "./component/Footer"
import Header from "./component/Header"
import HeroSection from './component/HeroSection.jsx'
import ProductLayout from './component/ProductLayout.jsx'
import About from './component/About.jsx'
import ProductDetails from './component/ProductDetails.jsx'
import Error from './component/Error.jsx'
import CartProvider from './context/CartContext.jsx'
import CartPage from './component/CartPage.jsx'

const App = () => {


  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

const router = createBrowserRouter([
    {
        peth: "/",
        element: <App />,
        children:[
            {
                path:"/",
                element:<HeroSection/>
            },
            {
                path: "/product",
                element:<ProductLayout/>
            },
            {
                path: "/product/:id",
                element:<ProductDetails/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            }
        ],
        errorElement: <Error />
    }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
