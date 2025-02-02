import githubImg from "./logooo/github.png";
import instagramImg from "./logooo/instagram.png";
import linkedinImg from "./logooo/linkedin.png";
export const SocialMedia = () => {
  return (
    <div className="social">
      <a href="https://www.instagram.com/sa9chit?igsh=MXRrNHc2MGRxdmxiYQ==">
        {" "}
        <img src={instagramImg} className="logo" />
      </a>
      <a href="https://github.com/sa9chit">
        {" "}
        <img src={githubImg} className="logo" />
      </a>
      <a href="https://www.linkedin.com/in/sanchit-sharma-81598831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <img src={linkedinImg} className="logo" />
      </a>
    </div>
  );
};
