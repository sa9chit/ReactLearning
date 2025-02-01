import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/about"}> hOME </Link>
      <Link to={"/dashboard"}>DashBoard</Link>
    </div>
  );
}
