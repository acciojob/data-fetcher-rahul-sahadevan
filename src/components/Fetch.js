import React,{useState,useEffect} from 'react'
import axios from 'axios'
let val = '';
function Fetch(){
    let [obj,setObj] = useState([]);
    let [count,setCount] = useState(0)
    let [error,setError] = useState(false);
    function handleFetch(){
        return axios.get('https://dummyjson.com/products')
        .then((data)=>{
            localStorage.setItem('obj',JSON.stringify(data.data));
            let val = localStorage.getItem('obj');
            let obj2 = JSON.parse(val);
            setObj(obj2)
            setCount(count + 1);
        })
        .catch((e)=>{
            console.log(e)
            setError(true)
        })
        
    }
    useEffect(()=>{
        if(count === 0){
            handleFetch();
        }
    },[count])
    
    console.log(obj)
    

    return (
        
        <div>
        <h1>Data fetched from API</h1>
        {error ? (
          <p>An error occurred: Unable to fetch data from the API.</p>
        ) : (
            <pre >{JSON.stringify(obj)}</pre>
          
        )}
      </div>
           
        
    )
}
export default Fetch