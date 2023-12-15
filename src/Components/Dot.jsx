import React from 'react'
import style from "./nav.module.css"
const Dot = () => {
  let chng=()=>{
    if(document.body.style.backgroundColor!=="black") {
    document.body.style.backgroundColor="black"
    document.body.style.color="white"}
    else{
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }
  return (
    <div id={style.btn}>
      <button onClick={chng}>Mode</button>
    </div>
  )
}

export default Dot