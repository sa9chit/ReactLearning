import { SocialMedia } from "./socialMedia";
import ImgLogo from "./logooo/sanchit.png"
const Navigation = () => {
  return (
    <div className="navigation">
      <span className="name">
        <img src={ImgLogo} className="name"></img>
      </span>
      <div className="navData">
        <ul className="ul">
          <li className="li">Home</li>
          <li className="li">Project</li>
          <li className="li">About</li>
          <li className="li">Contact</li>
        </ul>
        <SocialMedia />
      </div>
      <span className="helpSupport">Help & Support</span>
    </div>
  );
};
export default Navigation;
