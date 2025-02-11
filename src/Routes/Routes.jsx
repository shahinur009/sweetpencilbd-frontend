import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Main from "../Layout/Main";
import MinimalLayout from "../Layout/MainLayout";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import ProductsStock from "../Dashboard/Pages/ProductStock/ProductsStock";
import Update from "../Dashboard/Pages/ProductStock/Update";
import AddProduct from "../Dashboard/Pages/AddProduct/AddProduct";
import AdminBannerHome from "../Dashboard/Pages/Banner/AdminBannerHome";
import CreateBanner from "../Dashboard/Pages/Banner/CreateBanner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "stock",
        element: <ProductsStock />,
      },
      {
        path: "update/:id",
        element: <Update />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },

      {
        path: "banner",
        element: <AdminBannerHome />,
      },
      {
        path: "banner/create-banner",
        element: <CreateBanner />,
      },
    ],
  },
]);
