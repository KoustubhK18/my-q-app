"use client"
import React, { useEffect, useState } from 'react'

const Countdown = (props) => {
    let {min, sec} = props?.data || {min: 10, sec:0};
    let[minValue, setMinValue] = useState(min);
    let[secValue, setSecValue] = useState(sec);
    useEffect(()=>{
      setTimeout(()=>{
            if(minValue != 0){
                if(secValue === 0){
                    setSecValue(59);
                    setMinValue(minValue-1);
                } else{
                    setSecValue(secValue-1);
                }
            }
            else{
              if(secValue === 0){
                return;
              } else{
                setSecValue(secValue-1);
              }
            }
        },1000);
    },[secValue]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":minValue}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":secValue}}></span>
    </span>
    sec
  </div>
</div>
  )
}

export default Countdown