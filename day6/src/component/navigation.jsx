import { SocialMedia } from "./socialMedia";
import ImgLogo from "./logooo/sanchit.png";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <span className="name">
        <img src={ImgLogo} className="name"></img>
      </span>
      <div className="navData">
        <ul className="ul">
        <NavLink to= "/" className='' >Home</NavLink>
        <NavLink to= "/" className=''>Project</NavLink>
        <NavLink to= "/" className=''>About</NavLink>
        <NavLink to= "/" className=''>Contact</NavLink>
        
        </ul>
        <SocialMedia />
      </div>
      <span className="helpSupport">Help & Support</span>
    </div>
  );
};
export default Navigation;
