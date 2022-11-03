import titlogo from "../images/Intelligentsiatalklogo.png"

const Loadscreen = ({loadscreen}) => {
    let goneClass = loadscreen ? "" : "gone"

    return ( 
        <div className={`load-screen-body ${goneClass}`}>
            <div className="center-loading-content">
                <img src={titlogo} alt="here lays something" />
            </div>
        </div>
     );
}
 
export default Loadscreen;