import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Favorites from "./components/Favorites";
import Product from "./components/Product";
import Login from "./pages/Login";
// import SideBar from "./pages/SideBar";

const Layout = () => {
  return (
    <div className=''>
      <Header />

      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='font-bodyFont'>
      {/* <h1 className='text-red-600'>Bazaar E-Commerce</h1> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
