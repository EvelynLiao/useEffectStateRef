import { useState, useEffect } from "react"

const UseEffectApi = () =>{
    
    const [data, setData] = useState([]);

    useEffect(()=>{
     
        console.log ('component mounted')

        fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response)=>response.json())
         .then((data)=>{
            setData(data)
        })
        .catch ((error) => {
          //handel erros if any
          console.error("Error fetching data: ", error);
        });

      return ()=>{}
      // Call the fetchData function when the component is mounted
      //mounting specifically refers to the phase where the virtual DOM is converted into actual DOM elements and added to the browser's document.
    }, [])


    return (
        <div>
            <p>
                Data from state: {data.map( (object)=> object.title)}
            </p>

        </div>

    )
}

export default UseEffectApi