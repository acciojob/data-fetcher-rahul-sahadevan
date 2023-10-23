import React,{useState,useEffect} from 'react'
import axios from 'axios'
let val = '';
function Fetch(){
    let [obj,setObj] = useState([]);
    let [count,setCount] = useState(0)
    function handleFetch(){
        return axios.get('https://dummyjson.com/products')
        .then((data)=>{
            localStorage.setItem('obj',JSON.stringify(data.data.products));
            let val = localStorage.getItem('obj');
            let obj2 = JSON.parse(val);
            setObj(obj2)
            setCount(count + 1);
        })
        .catch((e)=>{
            console.log(e)
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
            {
                obj.map((prod)=>{
                    return (<pre>
                        {
                            JSON.stringify(prod)
                        }
                    </pre>)
                })
            }
        </div>
    )
}
export default Fetch