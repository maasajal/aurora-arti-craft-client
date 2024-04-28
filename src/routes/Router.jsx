import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllArtCraft from "../pages/AllArtCraft/AllArtCraft";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import CraftDetail from "../pages/CraftDetail/CraftDetail";
import MyArtCraft from "../pages/MyArt&Craft/MyArtCraft";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import SubCategoryItems from "../pages/SubCategoryItems/SubCategoryItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5555/crafts"),
      },
      {
        path: "/all-art-craft-items",
        element: <AllArtCraft />,
        loader: () => fetch("http://localhost:5555/crafts"),
      },
      {
        path: `/crafts/:id`,
        element: (
          <PrivateRoute>
            <CraftDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5555/crafts/${params.id}`),
      },
      {
        path: `/my-art-craft-list`,
        element: (
          <PrivateRoute>
            <MyArtCraft />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5555/crafts`),
      },
      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5555/crafts/${params.id}`),
      },
      {
        path: "/subcategory/:subcategory_name",
        element: <SubCategoryItems />,
        loader: () => fetch(`http://localhost:5555/crafts`),
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
