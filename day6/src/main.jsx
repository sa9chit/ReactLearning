import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {  createBrowserRouter ,RouterProvider } from "react-router-dom";
import { Layout } from "./component/layout";
import { Login } from "./component/login";
import { HeroHeader } from "./component/heroHeader";
import "/index.css"
let routing = createBrowserRouter([
    {
    path : "/",
    element : <Layout />,
    children : [
        {
            path : "",
            element : <HeroHeader />
                    },
                    {
                        path : "login",
                        element : <Login/>
                                }
    ]
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routing} />
    </StrictMode>
)