import { useRef } from "react"
import Img from "./assets/Img.jpg";


const Hover = () => {
    const imageRef = useRef(null)

    const handleMouseEnter = () =>{
      imageRef.current.style.transform = 'scale(1.2)'; // Increase the size by 20%
      imageRef.current.style.filter = "brightness(200%)";
    }

    const handleMouseLeave = () => {
      imageRef.current.style.transform = 'scale(1)'; // Increase the size by 20%
      imageRef.current.style.filter = "brightness(100%)";
    };

    return (
      <div>
        <img
          ref={imageRef}
          src={Img}
          alt="Image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    );

}

export default Hover