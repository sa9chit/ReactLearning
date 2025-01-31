import { Dashboard } from "./component/dashboard";
import { Error } from "./component/errorE";
import About from "./component/tttt";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

function App() {
  return <div> main container with / </div>;
}

let routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
{
path: "/about",
    element: <About />,
    errorElement: <Error />,
},
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

createRoot(document.querySelector("#root")).render(
  <RouterProvider router={routing} />
);

export default App;
