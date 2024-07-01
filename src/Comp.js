import React from 'react'
import { useState } from 'react'
function Comp({item , index , selectedId , setSelectedId}) {
const isSelected = selectedId === index;

  function handleShow(){
   console.log(index)
   console.log(isSelected)
  isSelected ? setSelectedId(null) : setSelectedId(index);
  }
  return (
   <>
   <p className={isSelected ? "open title item" : "title item"} onClick={()=>handleShow()}><span className='number'>0{index+1}</span>{item.title} <span onClick={handleShow}>{isSelected ? "-" : "+"}</span>
   <p>{isSelected ? "Open" : "" }</p></p>
   
   </>
  )
}

export default Comp