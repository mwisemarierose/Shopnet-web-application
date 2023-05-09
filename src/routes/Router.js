import { lazy, useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/Home/Home.js";
import Products from "../layouts/ProductsPage/Products.js";
import Snack from "../layouts/ProductsPage/Snack.js";
import Landing from "../views/Landing page/Landing";
import ProductsPage from "../views/Product/product";
import SearchPage from "../views/SearchPage/search.js";

const FrontPages = lazy(() => import("../layouts/FrontPages/FrontPages.js"));
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const ManagerLayout = lazy(() =>import("../layouts/Manager-layout/ManagerLayout.js"));
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));
const Dashboard2 = lazy(() => import("../views/Managers/Dashboard1"));
const BasicTable = lazy(() => import("../views/tables/BasicTable"));
const ManagerTable = lazy(() => import("../views/tables/ManagerTable"));
const SupermarketTable = lazy(() => import("../views/tables/supermarketTable"));
const Table = lazy(() => import("../views/tables/Supermarket"));
const ProductTable = lazy(() => import("../views/tables/Product"));
const CategoryTable = lazy(() => import("../views/tables/CategoryTable.js"));

const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));
const FormLayout = lazy(() => import("../views/FormLayouts/FormLayout"));
const Addproduct = lazy(() => import("../views/FormLayouts/AddProduct"));
const AddCategory = lazy(() => import("../views/FormLayouts/AddCategory"));
const EditSupermarket = lazy(() => import("../views/FormLayouts/EditSupermarkets"));

const ThemeRoutes = [
  {
    path: "/",
    exact: true,
    element: <FrontPages/>,
    children: [
      { path: "/", element: <Navigate to="/landing" /> },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path:"/homepage",
        element:<Home />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/snack",
        element: <Snack />,
      },
      {
        path: "/product",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/dashboard", element: <Navigate to="/dashboard/home" /> },
      { path: "/dashboard/home", exact: true, element: <Dashboard1 /> },
      { path: "/dashboard/tables/basic-table", element: <BasicTable /> },
      { path: "/dashboard/tables/manager-table", element: <ManagerTable /> },
      { path: "/dashboard/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/dashboard/form-layouts/form-layout", element: <FormLayout /> },
      { path: "/dashboard/form-layouts/Edit-supermarket/:id", element: <EditSupermarket /> },
      { path: "/dashboard/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/dashboard/form-elements/button", element: <ExButton /> },
      { path: "/dashboard/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/dashboard/form-elements/radio", element: <ExRadio /> },
      { path: "/dashboard/form-elements/slider", element: <ExSlider /> },
      { path: "/dashboard/form-elements/switch", element: <ExSwitch /> },
    ],
  },
  {
    path: "/manager",
    exact: true,
    element: <ManagerLayout />,
    children: [
      { path: "/manager", element: <Navigate to="/manager/home" /> },
      { path: "/manager/home", exact: true, element: <Dashboard2 /> },
      { path: "/manager/tables/supermarket-table", element: <Table /> },
      { path: "/manager/form-layouts/Add-product", element: <Addproduct /> },
      { path: "/manager/form-layouts/Add-category", element: <AddCategory /> },
      { path: "/manager/form-layouts/product-list", element: <ProductTable/> },
      { path: "/manager/form-layouts/category-list", element: <CategoryTable/> },

      // { path: "/form-layouts/form-layout", element: <FormLayout /> },
    ],
  },
];
export default ThemeRoutes;
