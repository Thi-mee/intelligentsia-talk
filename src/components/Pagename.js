import intelligentsia from "../images/Icon transparency 2.png"


const Pagename = ({pagenamebrand}) => {

  return (
        <div className="pagename">
            <div className="container">
              <div className="pagenamebrand-flex">
              
                <h1 className="pagenameh1">{pagenamebrand}</h1>
              
                <div className="small-logo-top">
                    <img src={intelligentsia} alt="" className="small-side-logo" />
                </div>
              
              </div>
            </div>
        </div>
    );
}

export default Pagename;