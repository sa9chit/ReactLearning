import Navigation from "./component/navigation";
import { HeroHeader } from "./component/heroHeader";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Login } from "./component/login";
import "./App.css";
const App = () => {
  return (
    <div className="frontSection">
      <Navigation />
      <HeroHeader />

    </div>
  );
};


