import Pagename from "../components/Pagename";
import videohero from "../videos/herovideo.mp4";

const Contact = ({ pagenamebrand = "Contact Us" }) => {
  return (
    <div className="contact">
      <Pagename pagenamebrand={pagenamebrand} />

      <div className="react-player-holder-abtpage">
        <video src={videohero} controls width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Contact;
