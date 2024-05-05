import { useRef } from "react";

const Ref = () => {

    const inputRef = useRef(null);

    const button = () => {
      const enterValue = inputRef.current.value;
      console.log("Enter value: ", enterValue);
    };

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={button}>click</button>
        </div>

    )
}

export default Ref