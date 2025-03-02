import { CldVideoPlayer } from "next-cloudinary";
import { useEffect, useState } from "react";
import {saveAs} from "file-saver"

const VideoCard = ({asset}) => {
  const {public_id, display_name} = asset;
  const [isLoading, setIsLoading] = useState(false);
  const [retries, setRetries] = useState(0);
  const [errorOccurred, setErrorOccurred] = useState(false);


const downloadOgVideo = ()=> {  
      const vidSrc = asset.url;
      saveAs(vidSrc, display_name);
}  

const handleVideoError = (event) => {      
  console.log("Video Error", event);
   if(!errorOccurred) {
     setErrorOccurred(true);
     setIsLoading(true);
     setRetries((prev) => prev + 1);
     console.log(" Retrying to load video...", retries)   
     
   }
 
 }
 
 const handleMetaDataLoad = () => {
   setIsLoading(false)
   setErrorOccurred(false)
 
 }
 
 
 useEffect(() => {
   if(errorOccurred) {
     const intervalId = setInterval(() => {      
       setRetries((prev) => prev + 1);
     }, 5000);
     return ( ) => clearInterval(intervalId);
   }
 }, [errorOccurred]);
 
 useEffect (() => {
   if(retries > 0 && !isLoading) {
     setIsLoading(false);
   }   
 }, [retries]);
 
// const handleVideoError = () => {      
//  if(err?.player?.videojs?.error_?.statusCode == 423) {
//   if(!errorOccurred) {
//     setErrorOccurred(true);
//     setIsLoading(true);
//     setRetries((prev) => prev + 1);
//     console.log(" Retrying to load video...", retries)   
    
//   }
// }
// }

// const handleMetaDataLoad = () => {
//   setIsLoading(false)
//   setErrorOccurred(false)

// }


// useEffect(() => {
//   if(errorOccurred) {
//     const intervalId = setInterval(() => {      
//       setRetries((prev) => prev + 1);
//     }, 5000);
//     return ( ) => clearInterval(intervalId);
//   }
// }, [errorOccurred]);

// useEffect (() => {
//   if(retries > 0 && !isLoading) {
//     setLoading(false);
//   }   
// }, [retries]);




  return (
  <article className="card">
    <div className="title-container">
      <h4><span className="emoji">▶</span>{display_name}</h4>
      <h4>⫶</h4>

    </div>
{isLoading && <p>Loading...</p>  }
    <div className="video-container"
      style={{visibility:isLoading ? "hidden" : "visible"}} 
    >
      <CldVideoPlayer
        src = {public_id}
        id = {`${public_id}-${Math.random()}`} 
        // id = {public_id}
        width="300"
        height="300"
        alt = {display_name}
        // transformation={{
        //   width: 300, 
        //   height: 300, 
        //   crop: "fill", 
        //   gravity: "auto"
        //   }}
        onError = {handleVideoError} 
        onLoadedMetadataLoad = {handleMetaDataLoad}

      />
    </div>

    <div className="video-container">
        <div className="control-container">
          <button onClick={downloadOgVideo}>↓ download original </button>          
        </div>
      </div>

  </article>

  );
}
export default VideoCard;