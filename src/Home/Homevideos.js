import videohero from "../videos/herovideo.mp4";

const Homevideos = () => {
    return (
        <>
            <div className="video_box_suggested_videos">
                <video src={videohero} controls width="100%" height="100%" />
            </div>
            <div className="video_box_suggested_videos">
                <video src={videohero} controls width="100%" height="100%" />
            </div>
            <div className="video_box_suggested_videos">
                <video src={videohero} controls width="100%" height="100%" />
            </div>
            <div className="video_box_suggested_videos">
                <video src={videohero} controls width="100%" height="100%" />
            </div>
            <div className="video_box_suggested_videos">
                <video src={videohero} controls width="100%" height="100%" />
            </div>
        </>
    );
}

export default Homevideos;