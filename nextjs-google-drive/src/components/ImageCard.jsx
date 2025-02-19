import { CldImage } from 'next-cloudinary';

const ImageCard = () => {

  // const {public_id, display_name} = asset;
  return (
    <article className="card" >
      <div className="title-container">
        <h4> <span className="emoji">ᝰ</span> {"display_name"}</h4>
          <h4>⫶</h4>
      </div>
      <CldImage
        // src={public_id}
        // width="300"
        // height="300"
        // id={public_id}
        // crop={{
        //   type: "auto",
        //   source: true}
        // }
        // alt={display_name}
      />      
      <div className='controls-container'><div className="control-container">
        <input type="checkbox" id="background" name="background" />
        <label htmlFor="background">no background</label>
      </div>
      <div className="control-container">
        <input type="checkbox" id="greyscale" name="greyscale" />
        <label htmlFor="greyscale">no background</label>
      </div>
      <button className="btn">↓Download</button>
      </div>
      <input value={""} placeholder=" Start typing to change image" />
    </article>
  )
}
export default ImageCard;