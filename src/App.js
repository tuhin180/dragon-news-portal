import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
