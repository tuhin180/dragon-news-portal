import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home";
import Categories from "../component/Categories";
import News from "../component/News";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/category/:id", element: <Categories></Categories> },
      { path: "/news/:id", element: <News></News> },
    ],
  },
]);
