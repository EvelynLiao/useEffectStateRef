import { useState } from "react"
import Img from "./assets/Img.jpg"

const Image = () => {

    const [showImg, setShowImg] = useState(true)

    const toggleImg = () =>{
        setShowImg(!showImg)
        // console.log("Image visibility status:", showImg);
    }

    return (

    <div className="Img-container">
      {showImg && <img src={Img} alt="Img" />}
      <button onClick={toggleImg}>click</button>
    </div>

    );
}

export default Image