import Homevideos from "./Homevideos";

const Suggestedvideos = () => {
  return (
    <div className="Suggestedvideos">
      <div className="container">
        <div className="sub_head_suggested_videos">
          <h3 className="know-more">Suggested Videos</h3>
        </div>
        <div className="videos_list">
          <div className="flex_video_row">
            <Homevideos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestedvideos;
