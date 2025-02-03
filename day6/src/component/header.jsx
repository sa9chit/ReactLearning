import { Link } from "react-router-dom"
const Header = () => {
 return (
    <header className="header">
      <div className="button">Service</div>
        <Link to="login" className="button" >Login</Link>
    </header>
  );
};
export default Header;
