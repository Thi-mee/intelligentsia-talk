import titlogo from "../images/Intelligentsiatalklogo.png"

import fbIcon from "../images/facebookicon.svg"
import twIcon from "../images/twittericon.svg"
import ytIcon from "../images/youtubeicon.svg"
import igIcon from "../images/instagramicon.svg"



const Footer = () => {
    return ( 
        <footer>
            <div className="centerBox">
                <div className="footerBanner">
                    <img src={titlogo} className="logo"alt=""/>
                </div>
                <div className="socialMedias">
                <a href="/"><img src={fbIcon} alt="" className="fb"/></a>
            <a href="/"><img src={twIcon} alt="" className="tw"/></a>
                <a href="/"><img src={ytIcon} alt="" className="yt"/></a>
                    <a href=" "><img src={igIcon} alt="" className="ig"/></a>
                </div>
                <div className="poweredByBox">
                    <span className="center">Powered by</span>
                    <span className="center"><a href="https://www.timesandintelligentsia.com" target="_blank" rel="noreferrer" >www.timesandintelligentsia.com</a></span>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;