import { Link } from "react-router-dom";
import Typinganimation from "./Typinganimation";
import herovideo from "../videos/herovideo.mp4";
import { BsPlayCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header-home">
      <video className="bg-video" autoPlay loop muted>
        <source src={herovideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="hero_section_box">
        <div className="hero-section">
          <div className="ad-copy  container">
            <Typinganimation />
          </div>
          <div className="watch_videos_box">
            <Link to="/videos" className="watch_btn_home_link">
              Watch Videos <BsPlayCircleFill />{" "}
            </Link>
            <Link to="/wall" className="wall_btn_home_link">
              Intelligentsia Wall
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
