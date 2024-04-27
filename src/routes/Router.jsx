import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllArtCraft from "../pages/AllArtCraft/AllArtCraft";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../painting&drawing.json"),
      },
      {
        path: "/all-art&craft",
        element: <AllArtCraft />,
        loader: () => fetch("http://localhost:5555/crafts"),
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
