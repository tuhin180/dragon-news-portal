import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home";
import Categories from "../component/Categories";
import News from "../component/News";
import Login from "../component/Login";
import Register from "../component/Register";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Categories></Categories>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: <News></News>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
