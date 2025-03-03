import { CldImage } from 'next-cloudinary';
import {useState} from "react";
import { saveAs } from 'file-saver';

const ImageCard = ({asset}) => {

  const {public_id, display_name} = asset;
  const [removeBackground, setRemoveBackground] = useState(false);
  const [grayscale, setGrayscale] = useState(false);  
  const [prompt, setPrompt] = useState("");

  const downloadImage = () => { 
    const imgSrc = document.getElementById(public_id).src;
    saveAs(imgSrc, display_name);
   }
   
  return (
    <article className="card" >
      <div className="title-container">
        <h4> <span className="emoji">ᝰ</span> {display_name}</h4>
          <h4>⫶</h4>
      </div>
      <CldImage
        src={public_id}
        width="300"
        height="300"
        id={public_id}

        removeBackground = {removeBackground}
        grayscale = {grayscale      }
        replaceBackground={prompt}
        crop={{
          type: "auto",
          source: true}
        }
        alt={display_name}
      />      
      <div className='controls-container'>
      <div className="control-container">
        <input type="checkbox" id="background"
         name="background" 
         onChange={ ()=>
          setRemoveBackground(!removeBackground) } />
        <label htmlFor="background">
        Background</label>
      </div>
      <div className="control-container">
        <input type="checkbox" id="grayscale" 
        name="grayscale" onChange={()=> setGrayscale (!grayscale)} />
        <label htmlFor="grayscale">Grayscale</label>
      </div>
      <button className="btn" onClick={downloadImage}>
      ↓Download</button>
      </div>
      <input value={prompt} placeholder="
      Start typing to change image" 
      onChange={(e)=> setPrompt(e.target.value)}/>
    </article>
  )
}
export default ImageCard;