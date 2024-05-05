import { useState } from "react"

const BgColor = () =>{
    const [backC, setBackC] = useState('#FFFFFF')


        const getRandomColor = () =>{
            const val = '#' + Math.floor(Math.random()*(256*256*256)).toString(16);
            return val;
        }


    const toggleColor = () =>{
        setBackC(getRandomColor);
    }

    return (
        <div style={{backgroundColor: backC, minHeight: '100ch', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.5s'}}>
            <button  className="bgColorBtn" onClick={toggleColor}>change color</button>
            <div className="colorName">{backC}</div>
        </div>
    )
}

export default BgColor