// import { CldVideoPlayer } from "next-cloudinary";
// import { useEffect, useState } from "react";
// import {saveAs} from "file-saver"

// const VideoCard = ({asset}) => {
//   const {public_id, display_name,url} = asset;
//   const [isLoading, setIsLoading] = useState(false);
//   const [retries, setRetries] = useState(0);
//   const [errorOccurred, setErrorOccurred] = useState(false);


// const downloadOgVideo = ()=> {        
//       saveAs(url, display_name || "video.mp4" ); 
// }  

// const handleVideoError = () => {      
//   if(err?.player?.videojs?.error_?.statusCode == 423) {
//    if(!errorOccurred) {
//      setErrorOccurred(true);
//      setIsLoading(true);
//      setRetries((prev) => prev + 1);
//      console.log(" Retrying to load video...", retries)   
     
//    }
//  }
//  }
 
//  const handleMetaDataLoad = () => {
//    setIsLoading(false)
//    setErrorOccurred(false)
 
//  }
 
 
//  useEffect(() => {
//    if(errorOccurred) {
//      const intervalId = setInterval(() => {      
//        setRetries((prev) => prev + 1);
//      }, 5000);
//      return ( ) => clearInterval(intervalId);
//    }
//  }, [errorOccurred]);
 
//  useEffect(() => {
//   if (errorOccurred) {
//     const intervalId = setInterval(() => {
//       setRetries((prev) => prev + 1);
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }
// }, [errorOccurred]);


//   return (
//   <article className="card">
//     <div className="title-container">
//       <h4><span className="emoji">▶</span>{display_name}</h4>
//       <h4>⫶</h4>

//     </div>
// {isLoading && <p>Loading...</p>  }
//     <div className="video-container"
//       style={{visibility:isLoading ? "hidden" : "visible"}} 
//     >
//       <CldVideoPlayer
//         src = {public_id}
//         id = {`${public_id}-${Math.random()}`} 
        
//         width="300"
//         height="300"
//         alt = {display_name}
//         transformation={{
//           width: 300, 
//           height: 300, 
//           crop: "fill", 
//           gravity: "auto"
//           }}
 
          
//         onError = {handleVideoError} 
//         onLoadedMetadataLoad = {handleMetaDataLoad}
//         tracks={[]}

//       />
//     </div>

//     <div className="video-container">
//         <div className="control-container">
//           <button onClick={downloadOgVideo}>↓ download original </button>          
//         </div>
//       </div>

//   </article>

//   );
// }
// export default VideoCard;


import { CldVideoPlayer } from "next-cloudinary";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const VideoCard = ({ asset }) => {
  const { public_id, display_name, url } = asset;
  const [isLoading, setIsLoading] = useState(true);
  const [retries, setRetries] = useState(0);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const downloadOgVideo = () => {
    try {
      const filename = `${display_name.replace(/[^a-zA-Z0-9-_]/g, '')}.mp4` || "video.mp4";
      saveAs(url, filename);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleVideoError = (event) => {
    const error = event.detail?.error;
    if (error?.statusCode === 423) {
      console.log("Video processing, retrying...");
      setErrorOccurred(true);
      setIsLoading(true);
    }
  };

  const handleMetaDataLoad = () => {
    setIsLoading(false);
    setErrorOccurred(false);
  };

  useEffect(() => {
    let intervalId;
    if (errorOccurred) {
      intervalId = setInterval(() => {
        setRetries(prev => prev + 1);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [errorOccurred]);

  return (
    <article className="card">
      <div className="title-container">
        <h4><span className="emoji">▶</span>{display_name}</h4>
        <h4>�⫉</h4>
      </div>

      {isLoading && <p>Loading...</p>}

      <div className="video-container" style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <CldVideoPlayer
          key={`${public_id}-${retries}`}
          src={public_id}
          width="300"
          height="300"
          alt={display_name}
          transformation={{
            width: 300,
            height: 300,
            crop: "fill",
            gravity: "auto"
          }}
          onError={handleVideoError}
          onLoadedmetadata={handleMetaDataLoad}
          onEnded={() => setIsLoading(false)}
          // controls
        />
      </div>

      <div className="control-container">
        <button onClick={downloadOgVideo}>↓ Download Original</button>
      </div>
    </article>
  );
};

export default VideoCard;