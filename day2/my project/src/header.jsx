import { useState , useEffect } from "react";
function Header() {
  const [loginC, setLoginC] = useState("Log-in");
  useEffect(()=>{
    console.log("hello") 
   },[loginC]) // State for button text
  return (
    <div className="header">
      <img
        src="https://imgs.search.brave.com/_O1XWeRwmD73lqc5p9CPPk2XQCJyt-eLIkIB7Xsr7_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzQzLzgwLzkx/LzM2MF9GXzExNDM4/MDkxNTFfUGdPM29B/Nm53a09VdzlMdWJZ/d0U3dFFVZlEwbXds/QjkuanBn"
        alt="Logo"
      />
      <div className="rightHead">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginC == "Log-in" ? setLoginC("log-out") : setLoginC("Log-in");
            }}
            className="login"
          >
            {loginC}
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Header;
