import Aboutustext from "../About/Aboutustext";
import Aboutusvidexp from "../About/Aboutusvidexp";
import Pagename from "../components/Pagename";

const About = ({pagenamebrand="About Us"}) => {
    return ( 
        <div className="about">
            <Pagename pagenamebrand={pagenamebrand}/>
            <Aboutustext/>
            <Aboutusvidexp/>
      </div>
     );
}

export default About;