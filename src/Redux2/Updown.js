import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inc,dec } from  '../Store2/features/Slice' 

function Updown() {
    let dispatch=useDispatch()


    let count=useSelector((state)=>{
        // console.log(state.counter.value)
       return state.counter.value
    })
  return (
    <>
    <button onClick={()=>{dispatch(inc())}}> +</button>
    <p>{count}</p>
    <button onClick={()=>{dispatch(dec())}}>-</button>
    
    
    
    </>
  )
}

export default Updown