import React, { useRef, useState } from 'react'

type Props ={
    startNum:number;
    endNum:number;
    fruits?:string[];
}

export const Test:React.FC<Props> = ({startNum ,endNum}) => {

    let totalNum:number=startNum-endNum;
    const [count,setCount]= useState<number>(totalNum);
    const ref = useRef<number>(0);
    ref.current++;

    return (
        <div>
            <div className="">
<button onClick={()=>{ return (setCount(count-1))}}>Decrease -</button>
                </div>
        <h3>  count:{count}</h3> 
        <br />
        <div className="">
     renders:   {ref.current}
            </div>
        <div className="">
        <button onClick={()=>setCount(count+1)}>Increase +</button>
            </div>  
        </div>
    )
}
