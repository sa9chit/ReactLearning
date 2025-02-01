import { Dashboard } from "./component/dashboard";
import { Error } from "./component/errorE";
import About from "./component/tttt";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./header";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

let routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <RouterProvider router={routing} />
);

export default App;
