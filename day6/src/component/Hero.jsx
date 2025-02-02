import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Login } from "./component/login";

export const Hero = () => {
  return (
    <div className="hero ">
      <div className="detail H"></div>
      <div className="image H"></div>
    </div>
  );
};

 
let routing = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <RouterProvider router={routing} />
);