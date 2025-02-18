import { CldVideoPlayer } from "next-cloudinary";
import { useState } from "react";

const VideoCard = () => {
  const [isLoading, setLoading] = useState(false);
  return (
  <article className="card">
    <div className="title-container">
      <h4><span className="emoji">▶</span>{""}</h4>
      <h4>⫶</h4>

    </div>
{isLoading && <p>Loading...</p>  }
    <div className="video-container"
      style={{visibility:isLoading ? "hidden" : "visible"}} 
    >
      {/* <CldVideoPlayer />       */}
    </div>

    <div className="video-container">
        <div className="control-container">
          <button className="btn">↓ download original </button>          
        </div>
      </div>

  </article>

  );
}
export default VideoCard;