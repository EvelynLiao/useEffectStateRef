import { useState, useEffect } from "react";


const Validate = () =>{
    const [text, setText] = useState("")
    const [buttonIsValid, setButtonIsVaild] = useState(false)

    useEffect ( () =>{
        if (text.length >= 3){
            setButtonIsVaild(true)
        }
    }, [text])

    return (
      <div>
        <input onChange={(e) => setText(e.target.value)} type="text" />
        {/* useState(false) means we start with the switch turned off, so the button
        is initially disabled.
        <button disabled={!buttonIsValid}>click</button> means we're checking
        the switch. 
        If the switch is turned off (buttonIsValid is false), we put
        a lock on the button (disabled={true}), making it unable to press. But
        if the switch is turned on (buttonIsValid is true), we remove the lock
        (disabled={false}), making the button able to press. */}
        <button disabled={!buttonIsValid}>click</button>
      </div>
    );
}

export default Validate